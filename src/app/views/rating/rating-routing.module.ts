import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatingComponent } from './rating.component';
import { RatingDetailComponent } from './rating-detail/rating-detail.component';
import { RatingEditComponent } from './rating-edit/rating-edit.component';
import { RatingAddComponent } from './rating-add/rating-add.component';

const routes: Routes = [
  { path: '', component: RatingComponent, data: { title: 'Rating' } },
  { path: 'detail', component: RatingDetailComponent, data: { title: 'Rating Detail' } },
  { path: 'edit', component: RatingEditComponent, data: { title: 'Rating Edit' } },
  { path: 'add', component: RatingAddComponent, data: { title: 'Rating Add' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingRoutingModule { }
