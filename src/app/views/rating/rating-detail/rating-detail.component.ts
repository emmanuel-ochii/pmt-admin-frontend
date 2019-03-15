import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, UtilsService } from '../../../_services';
import { Rating, User } from '../../../_models';


@Component({
  selector: 'app-rating-detail',
  templateUrl: './rating-detail.component.html',
  styleUrls: ['./rating-detail.component.scss']
})
export class RatingDetailComponent implements OnInit {

  ratings: Array<Rating>;
  rating: Rating;

  users: Array<User>;
  user: User;

  surname = '';
  star = '';
  subject = '';
  staff_id = '';
  driver_id = '';
  terminal_id = '';
  vehicle_id = '';
  review = '';

  response: any;
  success = false;
  message = '';

  constructor( private router: Router, private apiService: ApiService, private utilsService: UtilsService ) { }

  ngOnInit() {
    const ratingId = window.localStorage.getItem('ratingDetailId');
    if (!ratingId) {
      alert('Invalid action.');
      this.router.navigate(['rating']); // list-rating
      return;
    }
    const userId = window.localStorage.getItem('');
    

    this.rating = this.utilsService.cleanObject(this.getRecord(ratingId));

    this.star = this.rating.star || '';
    this.subject = this.rating.subject;
    this.staff_id = this.rating.staff_id || '';
    this.driver_id = this.rating.driver_id || '';
    this.terminal_id = this.rating.terminal_id || '';
    this.vehicle_id = this.rating.vehicle_id || '';
    this.review = this.rating.review || '';
    

    console.log('\nRating Name', typeof this.rating, this.rating);
  }

  getRecord(ratingId) {
    console.log('\nRating Id ', ratingId);
    const storedRecords = window.localStorage.getItem('rating');
    const updated = window.localStorage.getItem('rating_updated');
    if (storedRecords) {
        this.ratings = JSON.parse(storedRecords);
        this.success = true;
        this.message = `Records retrieved since ${updated}`;
    }
    const t = this.apiService.getRating(this.ratings, ratingId);
    return t[0];
  }

  ratingEdit(rating: Rating): void {
    window.localStorage.removeItem('ratingEditId');
    window.localStorage.setItem('ratingEditId', rating.id);
    this.router.navigate(['rating/edit']);
  }

  ratingAdd(): void {
    this.router.navigate(['rating/add']);
  }

  goBack() {
    this.router.navigate(['rating']);
  }

}