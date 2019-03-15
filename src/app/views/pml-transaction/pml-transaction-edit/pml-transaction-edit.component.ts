import { Component, OnInit } from '@angular/core';
import { PmlTrasaction, ApiResponse } from '../../../_models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService, UtilsService } from '../../../_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-pml-transaction-edit',
  templateUrl: './pml-transaction-edit.component.html',
  styleUrls: ['./pml-transaction-edit.component.scss']
})
export class PmlTransactionEditComponent implements OnInit {
  pmltransactions: Array<PmlTrasaction>;
  pmltransaction: PmlTrasaction;

  editForm: FormGroup;

  response: ApiResponse;

  private value = {};

  private formData = {
    transaction_date: '',
    payable: '',
    transportation_expenses: '',
    taxi_expenses: '',
    feeding_expenses: '',
    payment_method: '',
    transaction_status: '',
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private utilsService: UtilsService
  ) { }

  ngOnInit() {
    const pmltransactionId = window.localStorage.getItem('pmltransactionEditId');
    if (!pmltransactionId) {
      alert('Invalid action.');
      this.router.navigate(['pml-transaction']); // list-pmltransaction
      return;
    }

    this.editForm = this.formBuilder.group({
      transaction_date: [''],
      payable: '',
      transportation_expenses: [''],
      taxi_expenses: [''],
      feeding_expenses: [''],
      payment_method: [''],
      transaction_status: [''],
    });
    // this.editForm.setValue(this.formData);
    this.pmltransaction = this.utilsService.cleanObject(this.getRecord(pmltransactionId));

    this.formData.transaction_date = this.pmltransaction.transaction_date.toString() || '';
    this.formData.payable = this.pmltransaction.payable.toString() || '';
    this.formData.transportation_expenses = this.pmltransaction.transportation_expenses.toString() || '';
    this.formData.taxi_expenses = this.pmltransaction.taxi_expenses.toString();
    this.formData.feeding_expenses = this.pmltransaction.feeding_expenses.toString();
    this.formData.payment_method = this.pmltransaction.payment_method;
    this.formData.transaction_status = this.pmltransaction.transaction_status;

    console.log('\nPmltransaction Name', typeof this.pmltransaction, this.pmltransaction);

  }




  onSubmit() {
    const payload = this.editForm.value;
    payload.id = this.pmltransaction.id;
    console.log('editForm payload ', payload);
    this.apiService.updatePmlTransaction(payload).pipe(first()).subscribe(data => {
          this.response = data;
          this.pmltransaction = this.response.payload;
          if (this.response.success) {
            alert('User updated successfully.');
            this.router.navigate(['pml-transaction']); 
            // Update Local Content
            window.localStorage.setItem('pmltransaction', JSON.stringify(this.response.payload));
            window.localStorage.setItem('pmltransaction_updated', JSON.stringify(new Date()));
          } else {
            alert(this.response.message);
          }


        },
        error => {
          alert(error);
        });
  }

  getRecord(pmltransactionId) {
    console.log('\nPmltransaction Id ', pmltransactionId);
    const storedRecords = window.localStorage.getItem('pmltransaction');
    const updated = window.localStorage.getItem('pmltransaction_updated');
    if (storedRecords) {
        this.pmltransactions = JSON.parse(storedRecords);
        console.log(`Records retrieved since ${updated}`);
    }
    const t = this.apiService.getPmlTransaction(this.pmltransactions, pmltransactionId);
    return t[0];
  }

  pmltransactionAdd(): void {
    this.router.navigate(['pml-transaction/add']);
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