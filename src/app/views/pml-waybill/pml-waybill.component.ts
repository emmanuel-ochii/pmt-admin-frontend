import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services';
import { Router } from '@angular/router';
import { PmlWaybill, ApiResponse } from '../../_models';

@Component({
  selector: 'app-pml-waybill',
  templateUrl: './pml-waybill.component.html',
  styleUrls: ['./pml-waybill.component.scss']
})
export class PmlWaybillComponent implements OnInit {

  response: any;
  success = false;
  message = '';
  pmlwaybills: Array<PmlWaybill>;

constructor( private router: Router, private apiService: ApiService) { }

ngOnInit() {
  if (!window.localStorage.getItem('token')) {
    this.router.navigate(['login']);
    return;
  }
  const storedRecords = window.localStorage.getItem('pmlwaybill');
  const updated = window.localStorage.getItem('pmlwaybill_updated');
  if (storedRecords && updated) {
      this.pmlwaybills = JSON.parse(storedRecords);
      this.success = true;
      this.message = `Records retrieved since ${updated}`;
  } else {
    this.pmlwaybillRetrieve();
  }
}

pmlwaybillRetrieve(): void {
  this.apiService.retrievePmlWayBill().subscribe(data => {
    this.response = data;
    this.pmlwaybills = this.response.payload;
    this.success = this.response.success;
    this.message = this.response.message;
    if (this.response.success) {
      window.localStorage.setItem('pmlwaybill', JSON.stringify(this.response.payload));
      window.localStorage.setItem('pmlwaybill_updated', JSON.stringify(new Date()));
    }
  });
}

pmlwaybillDetail(pmlwaybill: PmlWaybill): void {
  window.localStorage.removeItem('pmlwaybillDetailId');
  window.localStorage.setItem('pmlwaybillDetailId', pmlwaybill.id);
  this.router.navigate(['pml-waybill/detail'])
    .then(nav => { console.log(nav); }, err => {console.log(err); });
  console.log('Navigating to pmlwaybill detail');
  return;
}

pmlwaybillDelete(pmlwaybill: PmlWaybill): void {
  this.apiService.deletePmlWayBill(pmlwaybill.id).subscribe( data => {
      this.pmlwaybills = this.pmlwaybills.filter(i => i.id !== pmlwaybill.id);
      window.localStorage.setItem('pmlwaybill', JSON.stringify(this.pmlwaybills));
    });
}

pmlwaybillEdit(pmlwaybill: PmlWaybill): void {
  window.localStorage.removeItem('pmlwaybillEditId');
  window.localStorage.setItem('pmlwaybillEditId', pmlwaybill.id);
  this.router.navigate(['pml-waybill/edit']);
}

pmlwaybillAdd(): void {
  this.router.navigate(['pml-waybill/add']);
}
}

