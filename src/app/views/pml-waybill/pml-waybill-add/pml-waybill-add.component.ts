import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../_services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pml-waybill-add',
  templateUrl: './pml-waybill-add.component.html',
  styleUrls: ['./pml-waybill-add.component.scss']
})
export class PmlWaybillAddComponent implements OnInit {

  addForm: FormGroup;

  private value = {};

  constructor( private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      transaction_code: [''],
      terminal_id: [''],
      driver_id: [''],
      vehicle_id: [''],
      pmt_schedule_id: [''],
      pmt_route_id: [''],
      pml_shipment_ids: [''],
      total_charge: [''],
      departure_date: [''],
      authorized_date: [''],
    });

  }

  onSubmit() {
    const payload = this.addForm.value;
    console.log('Form input ', payload);
    this.apiService.createPmlWayBill(payload).subscribe( (response: any) => {
      console.log(response);
      if (response.success) {
        window.localStorage.setItem('pmlwaybillDetailId',response.payload.id);
        this.router.navigate(['pml-waybill/detail']);
      } else {
        console.log(response.message);
      }
        this.router.navigate(['pml-waybill']);
      });
  }
  goBack() {
    this.router.navigate(['pml-waybill']);
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



