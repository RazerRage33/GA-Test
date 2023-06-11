import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionOrderComponent } from './components/production-order/production-order.component';
import { ProductionOrderFormComponent } from './components/production-order-form/production-order-form.component';
import { MouldingParametersRecordComponent } from './components/moulding-parameters-record/moulding-parameters-record.component';

const routes: Routes = [
  { path: 'production-order', component: ProductionOrderComponent },
  { path: 'production-order-form', component: ProductionOrderFormComponent },
  { path: 'moulding-parameters-report', component: MouldingParametersRecordComponent },
  { path: '', component: ProductionOrderComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
