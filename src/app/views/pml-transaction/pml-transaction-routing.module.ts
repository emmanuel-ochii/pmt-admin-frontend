import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PmlTransactionComponent } from './pml-transaction.component';
import { PmlTransactionDetailComponent } from './pml-transaction-detail/pml-transaction-detail.component';
import { PmlTransactionEditComponent } from './pml-transaction-edit/pml-transaction-edit.component';
import { PmlTransactionAddComponent } from './pml-transaction-add/pml-transaction-add.component';

const routes: Routes = [
  { path: '', component: PmlTransactionComponent, data: { title: 'Pml-Transaction' }},
  { path: 'detail', component: PmlTransactionDetailComponent, data: { title: 'Pml-Transaction Detail'}},
  { path: 'edit', component: PmlTransactionEditComponent, data: { title: 'Pml-Transaction Edit'} },
  { path: 'add', component: PmlTransactionAddComponent, data: { title: 'Pml-Transaction Add'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PmlTransactionRoutingModule { }
