import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services';
import { Router } from '@angular/router';
import { PmlBilling } from '../../_models';

@Component({
  selector: 'app-pml-billing',
  templateUrl: './pml-billing.component.html',
  styleUrls: ['./pml-billing.component.scss']
})
export class PmlBillingComponent implements OnInit {
    response: any;
  success = false;
  message = '';
  pmlbillings: Array<PmlBilling>;


  constructor( private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.pmlbillingRetrieve();
    const storedRecords = window.localStorage.getItem('pmlbilling');
    const updated = window.localStorage.getItem('pmlbilling_updated');
    if (storedRecords && updated) {
        this.pmlbillings = JSON.parse(storedRecords);
        this.success = true;
        this.message = `Records retrieved since ${updated}`;
    } else {
      this.pmlbillingRetrieve();
    }
  }

  pmlbillingRetrieve(): void {
    this.apiService.listPmlBilling().subscribe(data => {
      this.response = data;
      this.pmlbillings = this.response.payload;
      this.success = this.response.success;
      this.message = this.response.message;
      if (this.response.success) {
        window.localStorage.setItem('pmlbilling', JSON.stringify(this.response.payload));
        window.localStorage.setItem('pmlbilling_updated', JSON.stringify(new Date()));
      }
    });
  }

  pmlbillingDetail(pmlbilling: PmlBilling): void {
    window.localStorage.removeItem('pmlbillingDetailId');
    window.localStorage.setItem('pmlbillingDetailId', pmlbilling.id);
    this.router.navigate(['pml-billing/detail'])
      .then(nav => { console.log(nav); }, err => {console.log(err); });
    console.log('Navigating to pml-billing detail');
    return;
  }

  pmlbillingDelete(pmlbilling: PmlBilling): void {
    this.apiService.deletePmlBilling(pmlbilling.id).subscribe( data => {
        this.pmlbillings = this.pmlbillings.filter(i => i.id !== pmlbilling.id);
        window.localStorage.setItem('pmlbilling', JSON.stringify(this.pmlbillings));
      });
  }

  pmlbillingEdit(pmlbilling: PmlBilling): void {
    window.localStorage.removeItem('pmlbillingEditId');
    window.localStorage.setItem('pmlbillingEditId', pmlbilling.id);
    this.router.navigate(['pml-billing/edit']);
  }

  pmlbillingAdd(): void {
    this.router.navigate(['pml-billing/add']);
  }
}