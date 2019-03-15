import { Component, OnInit } from '@angular/core';
import { ApiService, UtilsService } from '../../../_services';
import { PmlTrasaction } from '../../../_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pml-transaction-detail',
  templateUrl: './pml-transaction-detail.component.html',
  styleUrls: ['./pml-transaction-detail.component.scss']
})
export class PmlTransactionDetailComponent implements OnInit {
  pmltransactions: Array<PmlTrasaction>;
  pmltransaction: PmlTrasaction;


  transaction_date = '';
  terminal_id = '';
  shipment_id = '';
  customer_id = '';
  payable = '';
  transportation_expenses = '';
  taxi_expenses = '';
  payment_method = ''; 
  transaction_status = '';

  response: any;
  success = false;
  message = '';

  constructor( private router: Router, private apiService: ApiService, private utilsService: UtilsService ) { }

  ngOnInit() {
    const pmltransactionId = window.localStorage.getItem('pmltransactionDetailId');
    if (!pmltransactionId) {
      alert('Invalid action.');
      this.router.navigate(['pmltransaction']); // list-rating
      return;
    }
    

    this.pmltransaction = this.utilsService.cleanObject(this.getRecord(pmltransactionId));

    this.transaction_date = this.pmltransaction.transaction_date.toString();
    this.terminal_id = this.pmltransaction.terminal_id.toString();
    this.shipment_id = this.pmltransaction.shipment_id.toString() || '';
    this.customer_id = this.pmltransaction.customer_id.toString();
    this.payable = this.pmltransaction.payable.toString();
    this.transportation_expenses = this.pmltransaction.transportation_expenses.toString();
    this.taxi_expenses = this.pmltransaction.taxi_expenses.toString();
    this.payment_method = this.pmltransaction.payment_method;
    this.transaction_status = this.pmltransaction.transaction_status;
    

    console.log('\nPmlbilling Name', typeof this.pmltransaction, this.pmltransaction);
  }

  getRecord(pmltransactionId) {
    console.log('\nPmlbilling Id ', pmltransactionId);
    const storedRecords = window.localStorage.getItem('pmltransaction');
    const updated = window.localStorage.getItem('pmltransaction_updated');
    if (storedRecords) {
        this.pmltransactions = JSON.parse(storedRecords);
        this.success = true;
        this.message = `Records retrieved since ${updated}`;
    }
    const t = this.apiService.getPmlTransaction(this.pmltransactions, pmltransactionId);
    return t[0];
  }

  pmltransactionEdit(pmlbilling: PmlTrasaction): void {
    window.localStorage.removeItem('pmltransactionEditId');
    window.localStorage.setItem('pmltransactionEditId', pmlbilling.id);
    this.router.navigate(['pml-transaction/edit']);
  }

  pmltransactionAdd(): void {
    this.router.navigate(['pml-transaction/add']);
  }

  goBack() {
    this.router.navigate(['pml-transaction']);
  }

}