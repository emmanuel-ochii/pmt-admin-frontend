import { Component, OnInit , Inject, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ApiService } from '../../../_services';
import { Rating, ApiResponse, SelectOptionInterface } from '../../../_models';


@Component({
  selector: 'app-rating-add',
  templateUrl: './rating-add.component.html',
  styleUrls: ['./rating-add.component.scss']
})
export class RatingAddComponent implements OnInit {

  addForm: FormGroup;

 private value = {};

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }



  ngOnInit() {

    this.addForm = this.formBuilder.group({
      star: [''],
      review: [''],
      subject: [''], // object;
    });

  }

  onSubmit() {
    const payload = this.addForm.value;
    console.log('Form input ', payload);
    this.apiService.createRating(payload).subscribe( (response: any) => {
      console.log(response);
      if (response.success) {
        window.localStorage.setItem('ratingDetailId', response.payload.id);
        this.router.navigate(['rating/detail']);
      } else {
        console.log(response.message);
      }
        this.router.navigate(['rating']);
      });
  }
  goBack() {
    this.router.navigate(['rating']);
  }

  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typed(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }
  
}
