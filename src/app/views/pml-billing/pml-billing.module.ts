import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PmlBillingRoutingModule } from './pml-billing-routing.module';
import { BillingAddComponent } from './billing-add/billing-add.component';
import { BillingDetailComponent } from './billing-detail/billing-detail.component';
import { BillingEditComponent } from './billing-edit/billing-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PmlBillingComponent } from './pml-billing.component';

@NgModule({
  declarations: [BillingAddComponent, BillingDetailComponent, BillingEditComponent, PmlBillingComponent],
  imports: [
    CommonModule,
    PmlBillingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    DataTablesModule,
    NgbModule
  ]
})
export class PmlBillingModule { }
