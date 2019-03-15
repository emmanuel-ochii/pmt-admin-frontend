import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ApiService, UtilsService } from '../../../_services';
import { ApiResponse, SelectOptionInterface, Rating } from '../../../_models';

@Component({
  selector: 'app-rating-edit',
  templateUrl: './rating-edit.component.html',
  styleUrls: ['./rating-edit.component.scss']
})
export class RatingEditComponent implements OnInit {

  ratings: Array<Rating>;
  rating: Rating;

  editForm: FormGroup;

  response: ApiResponse;

  private value = {};

  private formData = {
    id: '',
    star: '',
    subject: '',
    staff_id: '',
    driver_id: '',
    terminal_id: '',
    vehicle_id: '',
    review: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private utilsService: UtilsService) { }


    ngOnInit() {
      const ratingId = window.localStorage.getItem('ratingEditId');
      if (!ratingId) {
        alert('Invalid action.');
        this.router.navigate(['rating']); // list-rating
        return;
      }


      this.editForm = this.formBuilder.group({
        id: [''],
        star: [''],
        subject: [''],
        staff_id: [''],
        driver_id: [''],
        terminal_id: [''],
        vehicle_id: [''],
        review: [''],
      });
      // this.editForm.setValue(this.formData);
      this.rating = this.utilsService.cleanObject(this.getRecord(ratingId));

      this.formData.id = this.rating.id || '';
      this.formData.star = this.rating.star || '';
      this.formData.subject = this.rating.subject || '';
      this.formData.staff_id = this.rating.staff_id || '';
      // this.formData.driver_id = this.rating.driver_id || '';
      this.formData.terminal_id = this.rating.terminal_id || '';
      this.formData.vehicle_id = this.rating.vehicle_id || '';
      this.formData.review = this.rating.review || '';



      console.log('\nRating Name', typeof this.rating, this.rating);

    }




    onSubmit() {
      const payload = this.editForm.value;
      payload.id = this.rating.id;
      console.log('editForm payload ', payload);
      this.apiService.updateRating(payload).pipe(first()).subscribe(data => {
            this.response = data;
            this.rating = this.response.payload;
            if (this.response.success) {
              alert('User updated successfully.');
              this.router.navigate(['rating']); // list-rating
              // Update Local Content
              window.localStorage.setItem('rating', JSON.stringify(this.response.payload));
              window.localStorage.setItem('rating_updated', JSON.stringify(new Date()));
            } else {
              alert(this.response.message);
            }


          },
          error => {
            alert(error);
          });
    }

    getRecord(ratingId) {
      console.log('\nRating Id ', ratingId);
      const storedRecords = window.localStorage.getItem('rating');
      const updated = window.localStorage.getItem('rating_updated');
      if (storedRecords) {
          this.ratings = JSON.parse(storedRecords);
          console.log(`Records retrieved since ${updated}`);
      }
      const t = this.apiService.getRating(this.ratings, ratingId);
      return t[0];
    }

    ratingAdd(): void {
      this.router.navigate(['rating/add']);
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