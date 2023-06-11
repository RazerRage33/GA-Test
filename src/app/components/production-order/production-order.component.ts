import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { QrScannerComponent } from 'src/app/dialog/qr-scanner/qr-scanner.component';

@Component({
  selector: 'app-production-order',
  templateUrl: './production-order.component.html',
  styleUrls: ['./production-order.component.css'],
})
export class ProductionOrderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
