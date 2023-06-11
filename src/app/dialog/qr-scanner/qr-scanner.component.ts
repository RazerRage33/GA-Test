import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import jsQR from 'jsqr';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css'],
})
export class QrScannerComponent implements OnInit {
  @ViewChild('video', { static: false }) video: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('fileinput', { static: false }) fileinput: ElementRef;

  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  scanActive = false;
  scanResult = null;

  constructor(
    public dialogRef: MatDialogRef<QrScannerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.startScan();
  }

  ngOnDestroy() {
    this.stopScan();
  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;
  }

  reset() {
    this.scanResult = null;
  }

  //Closes dialog without scan data
  closeDialogDataless() {
    this.dialogRef.close();
  }

  //Stops camera and scanning
  stopScan() {
    this.scanActive = false;
    const stream = this.videoElement.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(function (track) {
      track.stop();
    });

    this.videoElement.srcObject = null;
  }
  //Initiates cameras and scanning
  async startScan() {
    // Not working on iOS standalone mode!
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
    });

    this.videoElement.srcObject = stream;
    // Required for Safari
    this.videoElement.setAttribute('playsinline', true);
    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
  }

  //data processing of scanned qr code
  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      this.scanActive = true;

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });

      if (code && code.data != '') {
        this.scanActive = false;
        this.scanResult = code.data;
        if(this.data.mode=="form"){
          this.closeDialogForm(this.data.formItem, code.data);
        } else if(this.data.mode=="generic"){
          this.closeDialog(code.data);
        }

      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  captureImage() {
    this.fileinput.nativeElement.click();
  }

  handleFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    var img = new Image();
    img.onload = () => {
      this.canvasContext.drawImage(
        img,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });

      if (code) {
        this.scanResult = code.data;
      }
    };
    img.src = URL.createObjectURL(file);
  }

  //Closes dialog after qr code scanned to auto fill form
  //Form item indicates the form field and scanned data is the qr code data
  closeDialogForm(formItem: string, scannedData: string) {
    console.log('closed');
    console.log('Form Item: ' + formItem + ' Scanned Data:   ' + scannedData);
    this.dialogRef.close({ formItem: formItem, scannedData: scannedData });
  }

  closeDialog(scannedData: string) {
    console.log('closed');
    console.log(' Scanned Data:   ' + scannedData);
    this.dialogRef.close({scannedData: scannedData });
  }
}
