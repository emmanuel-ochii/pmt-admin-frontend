import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-add',
  templateUrl: './billing-add.component.html',
  styleUrls: ['./billing-add.component.scss']
})
export class BillingAddComponent implements OnInit {

  addForm: FormGroup;

  private value = {};

  constructor( private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: [''],
      value: [''],
      description: [''],
    });

  }

  onSubmit() {
    const payload = this.addForm.value;
    console.log('Form input ', payload);
    this.apiService.createPmlBilling(payload).subscribe( (response: any) => {
      console.log(response);
      if (response.success) {
        window.localStorage.setItem('pmlbillingDetailId',response.payload.id);
        this.router.navigate(['pml-billing/detail']);
      } else {
        console.log(response.message);
      }
        this.router.navigate(['pml-billing']);
      });
  }
  goBack() {
    this.router.navigate(['pml-billing']);
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



