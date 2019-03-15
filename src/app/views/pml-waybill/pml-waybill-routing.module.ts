import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PmlWaybillComponent } from './pml-waybill.component';
import { PmlWaybillDetailComponent } from './pml-waybill-detail/pml-waybill-detail.component';
import { PmlWaybillEditComponent } from './pml-waybill-edit/pml-waybill-edit.component';
import { PmlWaybillAddComponent } from './pml-waybill-add/pml-waybill-add.component';

const routes: Routes = [
  { path: '', component: PmlWaybillComponent, data: { title: 'PML Waybill' } },
  { path: 'detail', component: PmlWaybillDetailComponent, data: { title: 'Pml-Waybill Detail'}},
  { path: 'edit', component: PmlWaybillEditComponent, data: { title: 'Pml-Waybill Edit' }},
  { path: 'add', component: PmlWaybillAddComponent, data: { title: 'Pml-Waybill Add'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PmlWaybillRoutingModule { }
