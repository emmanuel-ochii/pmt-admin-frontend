import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PmlTransactionRoutingModule } from './pml-transaction-routing.module';
import { PmlTransactionDetailComponent } from './pml-transaction-detail/pml-transaction-detail.component';
import { PmlTransactionAddComponent } from './pml-transaction-add/pml-transaction-add.component';
import { PmlTransactionEditComponent } from './pml-transaction-edit/pml-transaction-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';
import { PmlTransactionComponent } from './pml-transaction.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    PmlTransactionComponent, 
    PmlTransactionDetailComponent, 
    PmlTransactionAddComponent, 
    PmlTransactionEditComponent],
  imports: [
    CommonModule,
    PmlTransactionRoutingModule,
    FormsModule,ReactiveFormsModule,
    DataTablesModule,
    SelectModule
  ]
})
export class PmlTransactionModule { }
