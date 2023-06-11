import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { QrScannerComponent } from 'src/app/dialog/qr-scanner/qr-scanner.component';

@Component({
  selector: 'app-production-order-form',
  templateUrl: './production-order-form.component.html',
  styleUrls: ['./production-order-form.component.css'],
})
export class ProductionOrderFormComponent implements OnInit {
  scannedData: string;
  submittedData: any;
  Object = Object;

  errors = [{ type: 'required', message: 'Field cannot be empty' }];

  formData = new FormGroup({
    productionOrderNumber: new FormControl('', Validators.required),
    actualMachineId: new FormControl('', Validators.required),
    designatedMachineId: new FormControl('', Validators.required),
    actualMouldId: new FormControl('', Validators.required),
    designatedMouldId: new FormControl('', Validators.required),
  });

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.formData.reset;
  }
  

  onSubmit() {
    if (this.formData.valid) {
      console.log(this.formData.value);
      this.submittedData = this.formData.value;
  } else{
    this.formData.markAllAsTouched();
    console.log("FORM INVALID")
  }

  }

 /* openDialog(formItem: string, itemTitle: string): void {
    let dialogRef = this.dialog.open(QrScannerComponent, {
      width: '90vw',
      height: '90vh',
      data: { formItem: formItem, ItemTitle: itemTitle },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result.formItem + '   ' + result.scannedData);
      if (result.formItem != null) {
        this.formData.get(result.formItem).setValue(result.scannedData);
      }
    });
  }*/
}
