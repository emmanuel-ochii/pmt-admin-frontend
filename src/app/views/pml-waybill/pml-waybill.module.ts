import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PmlWaybillRoutingModule } from './pml-waybill-routing.module';
import { PmlWaybillComponent } from './pml-waybill.component';
import { PmlWaybillAddComponent } from './pml-waybill-add/pml-waybill-add.component';
import { PmlWaybillDetailComponent } from './pml-waybill-detail/pml-waybill-detail.component';
import { PmlWaybillEditComponent } from './pml-waybill-edit/pml-waybill-edit.component';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PmlWaybillComponent, PmlWaybillAddComponent, PmlWaybillDetailComponent, PmlWaybillEditComponent],
  imports: [
    CommonModule,
    PmlWaybillRoutingModule,
    DataTablesModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PmlWaybillModule { }
