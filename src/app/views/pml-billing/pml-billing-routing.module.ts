import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PmlBillingComponent } from './pml-billing.component';
import { BillingDetailComponent } from './billing-detail/billing-detail.component';
import { BillingEditComponent } from './billing-edit/billing-edit.component';
import { BillingAddComponent } from './billing-add/billing-add.component';

const routes: Routes = [
  { path: '', component: PmlBillingComponent, data: { title: 'PML Billing' } },
  { path: 'detail', component: BillingDetailComponent, data: { title: 'Pml-Billing Detail'}},
  { path: 'edit', component: BillingEditComponent, data: { title: ' Pml-Billing Edit'}},
  { path: 'add', component: BillingAddComponent, data: { title: 'Pml-Billing Add'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PmlBillingRoutingModule { }
