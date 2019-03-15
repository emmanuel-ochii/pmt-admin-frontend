import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ApiService, UtilsService } from '../../../_services';
import { ApiResponse, SelectOptionInterface, PmlBilling } from '../../../_models';

@Component({
  selector: 'app-billing-edit',
  templateUrl: './billing-edit.component.html',
  styleUrls: ['./billing-edit.component.scss']
})
export class BillingEditComponent implements OnInit {

  pmlbillings: Array<PmlBilling>;
  pmlbilling: PmlBilling;

  editForm: FormGroup;

  response: ApiResponse;

  private value = {};

  private formData = {
    name: '',
    value: '',
    description: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private utilsService: UtilsService) { }


    ngOnInit() {
      const pmlbillingId = window.localStorage.getItem('pmlbillingEditId');
      if (!pmlbillingId) {
        alert('Invalid action.');
        this.router.navigate(['pml-billing']); // list-pmlbilling
        return;
      }


      this.editForm = this.formBuilder.group({
        name: [''],
        value: [''],
        description: [''],
      });
      // this.editForm.setValue(this.formData);
      this.pmlbilling = this.utilsService.cleanObject(this.getRecord(pmlbillingId));

      this.formData.name = this.pmlbilling.name || '';
      this.formData.value = this.pmlbilling.value || '';
      this.formData.description = this.pmlbilling.description || '';



      console.log('\nPmlbilling Name', typeof this.pmlbilling, this.pmlbilling);

    }




    onSubmit() {
      const payload = this.editForm.value;
      payload.id = this.pmlbilling.id;
      console.log('editForm payload ', payload);
      this.apiService.updatePmlBilling(payload).pipe(first()).subscribe(data => {
            this.response = data;
            this.pmlbilling = this.response.payload;
            if (this.response.success) {
              alert('User updated successfully.');
              this.router.navigate(['pml-billing']); 
              // Update Local Content
              window.localStorage.setItem('pmlbilling', JSON.stringify(this.response.payload));
              window.localStorage.setItem('pmlbilling_updated', JSON.stringify(new Date()));
            } else {
              alert(this.response.message);
            }


          },
          error => {
            alert(error);
          });
    }

    getRecord(pmlbillingId) {
      console.log('\nPmlbilling Id ', pmlbillingId);
      const storedRecords = window.localStorage.getItem('pmlbilling');
      const updated = window.localStorage.getItem('pmlbilling_updated');
      if (storedRecords) {
          this.pmlbillings = JSON.parse(storedRecords);
          console.log(`Records retrieved since ${updated}`);
      }
      const t = this.apiService.getPmlBilling(this.pmlbillings, pmlbillingId);
      return t[0];
    }

    pmlbillingAdd(): void {
      this.router.navigate(['pml-billing/add']);
    }

    goBack() {
      this.router.navigate(['pml-billing']);
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