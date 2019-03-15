import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ApiService, UtilsService } from '../../../_services';
import { ApiResponse, SelectOptionInterface, PmlWaybill } from '../../../_models';

@Component({
  selector: 'app-pml-waybill-edit',
  templateUrl: './pml-waybill-edit.component.html',
  styleUrls: ['./pml-waybill-edit.component.scss']
})
export class PmlWaybillEditComponent implements OnInit {

  pmlwaybills: Array<PmlWaybill>;
  pmlwaybill: PmlWaybill;

  editForm: FormGroup;

  response: ApiResponse;

  private value = {};

  private formData = {
    transaction_code: '',
    terminal_id: '',
    driver_id: '',
    vehicle_id: '',
    pmt_schedule_id: '',
    pmt_route_id: '',
    pml_shipment_ids: '',
    total_charge: '',
    departure_date: '',
    authorized_date: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private utilsService: UtilsService) { }


    ngOnInit() {
      const pmlwaybillId = window.localStorage.getItem('pmlwaybillEditId');
      if (!pmlwaybillId) {
        alert('Invalid action.');
        this.router.navigate(['pml-waybill']); // list-pmlbilling
        return;
      }


      this.editForm = this.formBuilder.group({
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
      // this.editForm.setValue(this.formData);
      this.pmlwaybill = this.utilsService.cleanObject(this.getRecord(pmlwaybillId));

      this.formData.transaction_code = this.pmlwaybill.transaction_code || '';
      this.formData.terminal_id = this.pmlwaybill.terminal_id.toString() || '';
      this.formData.driver_id = this.pmlwaybill.driver_id.toString() || '';
      this.formData.vehicle_id = this.pmlwaybill.vehicle_id.toString();
      this.formData.pmt_schedule_id = this.pmlwaybill.pmt_schedule_id.toString();
      this.formData.pmt_route_id = this.pmlwaybill.pml_shipment_ids.toString();
      this.formData.pml_shipment_ids = this.pmlwaybill.pml_shipment_ids.toString();
      this.formData.total_charge = this.pmlwaybill.total_charge.toString();
      this.formData.departure_date = this.pmlwaybill.departure_date;
      this.formData.authorized_date = this.pmlwaybill.authorized_date.toString();


      console.log('\nPmlwaybill Name', typeof this.pmlwaybill, this.pmlwaybill);

    }




    onSubmit() {
      const payload = this.editForm.value;
      payload.id = this.pmlwaybill.id;
      console.log('editForm payload ', payload);
      this.apiService.updatePmlWayBill(payload).pipe(first()).subscribe(data => {
            this.response = data;
            this.pmlwaybill = this.response.payload;
            if (this.response.success) {
              alert('User updated successfully.');
              this.router.navigate(['pml-waybill']); 
              // Update Local Content
              window.localStorage.setItem('pmlwaybill', JSON.stringify(this.response.payload));
              window.localStorage.setItem('pmlwaybill_updated', JSON.stringify(new Date()));
            } else {
              alert(this.response.message);
            }


          },
          error => {
            alert(error);
          });
    }

    getRecord(pmlwaybillId) {
      console.log('\nPmlwaybill Id ', pmlwaybillId);
      const storedRecords = window.localStorage.getItem('pmlwaybill');
      const updated = window.localStorage.getItem('pmlwaybill_updated');
      if (storedRecords) {
          this.pmlwaybills = JSON.parse(storedRecords);
          console.log(`Records retrieved since ${updated}`);
      }
      const t = this.apiService.getPmlWayBill(this.pmlwaybills, pmlwaybillId);
      return t[0];
    }

    pmlwaybillAdd(): void {
      this.router.navigate(['pml-waybill/add']);
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