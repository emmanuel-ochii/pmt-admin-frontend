import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';

import { RatingRoutingModule } from './rating-routing.module';
import { RatingComponent } from './rating.component';
import { RatingAddComponent} from './rating-add/rating-add.component';
import { RatingDetailComponent } from './rating-detail/rating-detail.component';
import { RatingEditComponent } from './rating-edit/rating-edit.component';

//3rd Party 
import { DataTablesModule } from 'angular-datatables';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [RatingComponent, RatingAddComponent, RatingDetailComponent, RatingEditComponent],
  imports: [
    CommonModule,
    RatingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    DataTablesModule,
    NgbModule
  ]
})
export class RatingModule { }
