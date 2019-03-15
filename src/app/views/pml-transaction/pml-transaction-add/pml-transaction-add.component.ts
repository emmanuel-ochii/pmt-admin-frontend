import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pml-transaction-add',
  templateUrl: './pml-transaction-add.component.html',
  styleUrls: ['./pml-transaction-add.component.scss']
})
export class PmlTransactionAddComponent implements OnInit {

  addForm: FormGroup;

  private value = {};

  constructor( private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      transaction_date: [''],
      terminal_id: [''],
      shipment_id: [''],
      customer_id: [''],
      payable: [''],
      transportation_expenses: [''],
      taxi_expenses: [''],
      feeding_expenses: [''],
      payment_method: [''],
      transaction_status: [''],
  
    });

  }

  onSubmit() {
    const payload = this.addForm.value;
    console.log('Form input ', payload);
    this.apiService.createPmlTransaction(payload).subscribe( (response: any) => {
      console.log(response);
      if (response.success) {
        window.localStorage.setItem('pmltransactionDetailId',response.payload.id);
        this.router.navigate(['pml-transaction/detail']);
      } else {
        console.log(response.message);
      }
        this.router.navigate(['pml-transaction']);
      });
  }
  goBack() {
    this.router.navigate(['pml-transaction']);
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