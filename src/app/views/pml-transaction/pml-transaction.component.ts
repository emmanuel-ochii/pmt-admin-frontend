import { Component, OnInit } from '@angular/core';
import { PmlTrasaction } from '../../_models';
import { Router } from '@angular/router';
import { ApiService } from '../../_services';

@Component({
  selector: 'app-pml-transaction',
  templateUrl: './pml-transaction.component.html',
  styleUrls: ['./pml-transaction.component.scss']
})
export class PmlTransactionComponent implements OnInit {

    response: any;
    success = false;
    message = '';
    pmltransactions: Array<PmlTrasaction>;

  constructor( private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    const storedRecords = window.localStorage.getItem('pmltransaction');
    const updated = window.localStorage.getItem('pmltransaction_updated');
    if (storedRecords && updated) {
        this.pmltransactions = JSON.parse(storedRecords);
        this.success = true;
        this.message = `Records retrieved since ${updated}`;
    } else {
      this.pmltransactionRetrieve();
    }
  }

  pmltransactionRetrieve(): void {
    this.apiService.retrievePmlTransaction().subscribe(data => {
      this.response = data;
      this.pmltransactions = this.response.payload;
      this.success = this.response.success;
      this.message = this.response.message;
      if (this.response.success) {
        window.localStorage.setItem('pmltransaction', JSON.stringify(this.response.payload));
        window.localStorage.setItem('pmltransaction_updated', JSON.stringify(new Date()));
      }
    });
  }

  pmltransactionDetail(pmltransaction: PmlTrasaction): void {
    window.localStorage.removeItem('pmltransactionDetailId');
    window.localStorage.setItem('pmltransactionDetailId', pmltransaction.id);
    this.router.navigate(['pml-transaction/detail'])
      .then(nav => { console.log(nav); }, err => {console.log(err); });
    console.log('Navigating to pmltransaction detail');
    return;
  }

  pmltransactionDelete(pmltransaction: PmlTrasaction): void {
    this.apiService.deletePmlTransaction(pmltransaction.id).subscribe( data => {
        this.pmltransactions = this.pmltransactions.filter(i => i.id !== pmltransaction.id);
        window.localStorage.setItem('pmltransaction', JSON.stringify(this.pmltransactions));
      });
  }

  pmltransactionEdit(pmltransaction: PmlTrasaction): void {
    window.localStorage.removeItem('pmltransactionEditId');
    window.localStorage.setItem('pmltransactionEditId', pmltransaction.id);
    this.router.navigate(['pml-transaction/edit']);
  }

  pmltransactionAdd(): void {
    this.router.navigate(['pml-transaction/add']);
  }
}

