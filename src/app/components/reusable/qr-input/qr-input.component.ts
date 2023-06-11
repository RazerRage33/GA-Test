import { AfterViewInit, Component, ElementRef, forwardRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { QrScannerComponent } from 'src/app/dialog/qr-scanner/qr-scanner.component';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => QrInputComponent),
  multi: true
};

@Component({
  selector: 'app-qr-input',
  templateUrl: './qr-input.component.html',
  styleUrls: ['./qr-input.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class QrInputComponent implements OnInit,ControlValueAccessor, AfterViewInit, OnChanges  {
  // what mode Form Or Generic Input
  @Input()  mode = ""; 
  // Input Label
  @Input()  label = ""; 
  // Input ID
  @Input()  fieldId = ""; 
  //dialog Title
  @Input()  dialogTitle = ""; 
  // Current form control input. helpful in validating and accessing form control
  @Input() c:FormControl = new FormControl(); 

  // errors for the form control will be stored in this array
  errors:Array<any> = ['This field is required']; 

  // get reference to the input element
  @ViewChild('input')  inputRef:ElementRef; 


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.c)
  }

  ngOnChanges(){

  }
  ngAfterViewInit(){ 
    // RESET the custom input form control UI when the form control is RESET
    this.c.valueChanges.subscribe(
        () => {
            // check condition if the form control is RESET
            if (this.c.value == "" || this.c.value == null || this.c.value == undefined) {
                this.innerValue = "";      
                this.inputRef.nativeElement.value = "";                 
            }
        }
    );
}

 //The internal data model for form control value access
 private innerValue: any = '';

 // event fired when input value is changed . later propagated up to the form control using the custom value accessor interface
 onChange(e:Event, value:any){
     //set changed value
     this.innerValue = value;
     // propagate value into form control using control value accessor interface
     this.propagateChange(this.innerValue);

     //reset errors 
     this.errors = [];
     //setting, resetting error messages into an array (to loop) and adding the validation messages to show below the field area
     for (var key in this.c.errors) {
         if (this.c.errors.hasOwnProperty(key)) {
             if(key === "required"){
                 this.errors.push("This field is required");
             }else{
                 this.errors.push(this.c.errors[key]);
             }              
         }
     }
 }



 //get accessor
 get value(): any {
     return this.innerValue;
 };

 //set accessor including call the onchange callback
 set value(v: any) {
     if (v !== this.innerValue) {
         this.innerValue = v;
     }
 }

 //propagate changes into the custom form control
 propagateChange = (_: any) => { }

 //From ControlValueAccessor interface
 writeValue(value: any) {
     this.innerValue = value;
 }

 //From ControlValueAccessor interface
 registerOnChange(fn: any) {
     this.propagateChange = fn;
 }

 //From ControlValueAccessor interface
 registerOnTouched(fn: any) {

 }
  openDialogForm(mode:string,formItem: string, itemTitle: string): void {
    let dialogRef = this.dialog.open(QrScannerComponent, {
      width: '90vw',
      height: '90vh',
      data: { mode:mode,formItem: formItem, ItemTitle: itemTitle },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result.formItem + '   ' + result.scannedData);
      if (result.formItem != null) {
        this.c.setValue(result.scannedData);
      }
    });
  }

  openDialog(mode:string,): void {
    let dialogRef = this.dialog.open(QrScannerComponent, {
      width: '90vw',
      height: '90vh',
      data: {mode: mode },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result.scannedData);
      if(result.scannedData!=null){
        this.inputRef.nativeElement.value=result.scannedData;
      }
    });
  }
}
