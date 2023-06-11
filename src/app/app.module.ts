// default
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// angular material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatTabsModule } from '@angular/material/tabs';

// ng bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// prime ng
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';

// components & functions
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { ProductionOrderComponent } from './components/production-order/production-order.component';
import { QrScannerComponent } from './dialog/qr-scanner/qr-scanner.component';
import { ProductionOrderFormComponent } from './components/production-order-form/production-order-form.component';
import { QrInputComponent } from './components/reusable/qr-input/qr-input.component';
import { MouldingParametersRecordComponent } from './components/moulding-parameters-record/moulding-parameters-record.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductionOrderComponent,
    QrScannerComponent,
    ProductionOrderFormComponent,
    QrInputComponent,
    MouldingParametersRecordComponent,
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatMomentDateModule,
    NgbModule,
    TableModule,
    SelectButtonModule,
    ToastModule,
    SkeletonModule,
    InputTextModule,
    ProgressBarModule,
    DropdownModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
