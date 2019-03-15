import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services';
import { Router } from '@angular/router';
import { Rating, ApiResponse } from '../../_models';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  response: any;
  success = false;
  message = '';
  ratings: Array<Rating>;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.ratingRetrieve();
    const storedRecords = window.localStorage.getItem('rating');
    const updated = window.localStorage.getItem('rating_updated');
    if (storedRecords && updated) {
        this.ratings = JSON.parse(storedRecords);
        this.success = true;
        this.message = `Records retrieved since ${updated}`;
    } else {
      this.ratingRetrieve();
    }
  }

  ratingRetrieve(): void {
    this.apiService.listRating().subscribe(data => {
      this.response = data;
      this.ratings = this.response.payload;
      this.success = this.response.success;
      this.message = this.response.message;
      if (this.response.success) {
        window.localStorage.setItem('rating', JSON.stringify(this.response.payload));
        window.localStorage.setItem('rating_updated', JSON.stringify(new Date()));
      }
    });
  }

  ratingDetail(rating: Rating): void {
    window.localStorage.removeItem('ratingDetailId');
    window.localStorage.setItem('ratingDetailId', rating.id);
    this.router.navigate(['rating/detail'])
      .then(nav => { console.log(nav); }, err => {console.log(err); });
    console.log('Navigating to rating detail');
    return;
  }

  ratingDelete(rating: Rating): void {
    this.apiService.deleteRating(rating.id).subscribe( data => {
        this.ratings = this.ratings.filter(i => i.id !== rating.id);
        window.localStorage.setItem('rating', JSON.stringify(this.ratings));
      });
  }

  ratingEdit(rating: Rating): void {
    window.localStorage.removeItem('ratingEditId');
    window.localStorage.setItem('ratingEditId', rating.id);
    this.router.navigate(['rating/edit']);
  }

  ratingAdd(): void {
    this.router.navigate(['rating/add']);
  }
}