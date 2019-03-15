import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, UtilsService } from '../../../_services';
import { PmlWaybill } from '../../../_models';


@Component({
  selector: 'app-pml-waybill-detail',
  templateUrl: './pml-waybill-detail.component.html',
  styleUrls: ['./pml-waybill-detail.component.scss']
})
export class PmlWaybillDetailComponent implements OnInit {
  pmlwaybills: Array<PmlWaybill>;
  pmlwaybill: PmlWaybill;

  transaction_code = '';
  terminal_id = '';
  driver_id = '';
  vehicle_id = '';
  pmt_schedule_id = '';
  pmt_route_id = '';
  pml_shipment_ids = '';
  total_charge = '';
  departure_date = '';
  authorized_date = '';

  response: any;
  success = false;
  message = '';

  constructor( private router: Router, private apiService: ApiService, private utilsService: UtilsService ) { }

  ngOnInit() {
    const pmlwaybillId = window.localStorage.getItem('pmlwaybillDetailId');
    if (!pmlwaybillId) {
      alert('Invalid action.');
      this.router.navigate(['pmlwaybill']); // list-rating
      return;
    }
    this.pmlwaybill = this.utilsService.cleanObject(this.getRecord(pmlwaybillId));

    this.transaction_code = this.pmlwaybill.transaction_code || '';
    this.terminal_id = this.pmlwaybill.terminal_id.toString();
    this.driver_id = this.pmlwaybill.driver_id.toString(); //object
    this.vehicle_id = this.pmlwaybill.vehicle_id.toString();
    this.pmt_schedule_id = this.pmlwaybill.pmt_schedule_id.toString();
    this.pmt_route_id = this.pmlwaybill.pmt_route_id.toString();
    this.pml_shipment_ids = this.pmlwaybill.pml_shipment_ids.toString(); //object
    this.total_charge = this.pmlwaybill.total_charge.toString();
    this.departure_date = this.pmlwaybill.departure_date;
    this.authorized_date = this.pmlwaybill.authorized_date.toDateString();
    

    console.log('\nPmlwaybill Name', typeof this.pmlwaybill, this.pmlwaybill);
  }

  getRecord(pmlwaybillId) {
    console.log('\nPmlwaybill Id ', pmlwaybillId);
    const storedRecords = window.localStorage.getItem('pmlwaybill');
    const updated = window.localStorage.getItem('pmlwaybill_updated');
    if (storedRecords) {
        this.pmlwaybills = JSON.parse(storedRecords);
        this.success = true;
        this.message = `Records retrieved since ${updated}`;
    }
    const t = this.apiService.getPmlWayBill(this.pmlwaybills, pmlwaybillId);
    return t[0];
  }

  pmlwaybillEdit(pmlwaybill: PmlWaybill): void {
    window.localStorage.removeItem('pmlwaybillEditId');
    window.localStorage.setItem('pmlwaybillEditId', pmlwaybill.id);
    this.router.navigate(['pml-waybill/edit']);
  }

  pmlbillingAdd(): void {
    this.router.navigate(['pml-waybill/add']);
  }

  goBack() {
    this.router.navigate(['pml-waybill']);
  }

}