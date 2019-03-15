import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, UtilsService } from '../../../_services';
import { PmlBilling } from '../../../_models';

@Component({
  selector: 'app-billing-detail',
  templateUrl: './billing-detail.component.html',
  styleUrls: ['./billing-detail.component.scss']
})
export class BillingDetailComponent implements OnInit {
  pmlbillings: Array<PmlBilling>;
  pmlbilling: PmlBilling;


  name = '';
  value = '';
  description = '';

  response: any;
  success = false;
  message = '';

  constructor( private router: Router, private apiService: ApiService, private utilsService: UtilsService ) { }

  ngOnInit() {
    const pmlbillingId = window.localStorage.getItem('pmlbillingDetailId');
    if (!pmlbillingId) {
      alert('Invalid action.');
      this.router.navigate(['pmlbilling']); // list-rating
      return;
    }
    

    this.pmlbilling = this.utilsService.cleanObject(this.getRecord(pmlbillingId));

    this.name = this.pmlbilling.name || '';
    this.value = this.pmlbilling.value;
    this.description = this.pmlbilling.description|| '';
    

    console.log('\nPmlbilling Name', typeof this.pmlbilling, this.pmlbilling);
  }

  getRecord(pmlbillingId) {
    console.log('\nPmlbilling Id ', pmlbillingId);
    const storedRecords = window.localStorage.getItem('pmlbilling');
    const updated = window.localStorage.getItem('pmlbilling_updated');
    if (storedRecords) {
        this.pmlbillings = JSON.parse(storedRecords);
        this.success = true;
        this.message = `Records retrieved since ${updated}`;
    }
    const t = this.apiService.getPmlBilling(this.pmlbillings, pmlbillingId);
    return t[0];
  }

  pmlbillingEdit(pmlbilling: PmlBilling): void {
    window.localStorage.removeItem('pmlbillingEditId');
    window.localStorage.setItem('pmlbillingEditId', pmlbilling.id);
    this.router.navigate(['pmlbilling/edit']);
  }

  pmlbillingAdd(): void {
    this.router.navigate(['pmlbilling/add']);
  }

  goBack() {
    this.router.navigate(['pml-billing']);
  }

}