import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';

import { environment } from '../../environments/environment';
import {
    Accident,
    ApiResponse,
    Assignment,
    Maintenance,
    Offence,
    PmlWaybill,
    PmtWaybill,
    Rating,
    Schedule,
    Spares,
    Staff,
    Terminal,
    Vehicle,
    PmlTrasaction,
    PmlBilling
 } from '../_models';
import { UtilsService } from './utils.service';
const token = window.localStorage.getItem('token');
const httpoptions = {
    headers: new HttpHeaders({
        "content-type":"application/json",
       "Authentication": `Bearer ${token}` 
    })
}
@Injectable({ providedIn: 'root' })

export class ApiService {

    apiUrl = 'https://jibrila.herokuapp.com/api'; //environment.PEACE_API;
    constructor(private http: HttpClient, private utilsService: UtilsService) { }

    getAccident(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/accidents${query}`);
    }

    getAssignment(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/vehicle-assignments${query}`);
    }
    getMaintenance(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/pmt-maintenances${query}`);
    }

    getOffence(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/offences${query}`);
    }
    //PmlWaybill
    retrievePmlWayBill(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/pml-waybills${query}`);
    }

    updatePmlWayBill(pmlwaybill: PmlWaybill): Observable<ApiResponse> {
        const id = pmlwaybill.id;
        delete pmlwaybill.id;
        const payload = this.utilsService.cleanObject(pmlwaybill);
        return this.http.put<ApiResponse>(`${this.apiUrl}/pml-waybills/${id}`, payload);
    }

    createPmlWayBill(pmlwaybill: PmlWaybill): Observable<ApiResponse> {
        delete pmlwaybill.id;
        const payload = this.utilsService.cleanObject(pmlwaybill);
        return this.http.post<ApiResponse>(`${this.apiUrl}/pml-waybills`, payload);
    }

    deletePmlWayBill(id: PmlWaybill['id']): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/pml-waybills/${id}`);
    }

    getPmlWayBill(pmlwaybills, id): Terminal {
        return pmlwaybills.filter(obj => obj.id === id);
    }

    //PmlBilling
    
    getPmlBilling(pmlbillings, id): Rating {
        return pmlbillings.filter(obj => obj.id === id);
    }
    listPmlBilling(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/pml-billings${query}`);
    }
    updatePmlBilling(pmlbilling: PmlBilling): Observable<ApiResponse> {
        const id = pmlbilling.id;
        delete pmlbilling.id;
        const payload = this.utilsService.cleanObject(pmlbilling);
        return this.http.put<ApiResponse>(`${this.apiUrl}/pml-billings/${id}`, payload, httpoptions);
    }
    createPmlBilling(pmlbilling: PmlBilling): Observable<ApiResponse> {
        delete pmlbilling.id;
        const payload = this.utilsService.cleanObject(pmlbilling);
        return this.http.post<ApiResponse>(`${this.apiUrl}/pml-billings`, payload, httpoptions);
    }
    deletePmlBilling(id: PmlBilling['id']): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/pml-billings/${id}`,httpoptions);
    }
    //PmlTransaction
    retrievePmlTransaction(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/pml-transactions${query}`);
    }

    updatePmlTransaction(pmltransaction: PmlTrasaction): Observable<ApiResponse> {
        const id = pmltransaction.id;
        delete pmltransaction.id;
        const payload = this.utilsService.cleanObject(pmltransaction);
        return this.http.put<ApiResponse>(`${this.apiUrl}/pml-transactions/${id}`, payload);
    }

    createPmlTransaction(pmltransaction: PmlTrasaction): Observable<ApiResponse> {
        delete pmltransaction.id;
        const payload = this.utilsService.cleanObject(pmltransaction);
        return this.http.post<ApiResponse>(`${this.apiUrl}/pml-transactions`, payload);
    }

    deletePmlTransaction(id: PmlTrasaction['id']): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/pml-transactions/${id}`);
    }

    getPmlTransaction(pmltransactions, id): Terminal {
        return pmltransactions.filter(obj => obj.id === id);
    }

    
    //Ratings 
    listRating(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/ratings${query}`);
    }
    getRating(ratings, id): Rating {
        return ratings.filter(obj => obj.id === id);
    }
    updateRating(rating: Rating): Observable<ApiResponse> {
        const id = rating.id;
        delete rating.id;
        const payload = this.utilsService.cleanObject(rating);
        return this.http.put<ApiResponse>(`${this.apiUrl}/ratings/${id}`, payload, httpoptions);
    }
    createRating(rating: Rating): Observable<ApiResponse> {
        delete rating.id;
        const payload = this.utilsService.cleanObject(rating);
        return this.http.post<ApiResponse>(`${this.apiUrl}/ratings`, payload, httpoptions);
    }
    deleteRating(id: Rating['id']): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/ratings/${id}`,httpoptions);
    }
    

    getSchedule(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/pmt-schedules${query}`);
    }
    getSpares(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/spares${query}`);
    }

    //Staff
    getStaff(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/staff${query}`);
    }
    retrieveStaff(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/staff${query}`);
    }

    //Driver
    retrieveDriver(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/drivers${query}`);
      }

    getUser(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/drivers${query}`);
    }
    // Terminal
    retrieveTerminal(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/terminals${query}`);
    }

    updateTerminal(terminal: Terminal): Observable<ApiResponse> {
        const id = terminal.id;
        delete terminal.id;
        const payload = this.utilsService.cleanObject(terminal);
        return this.http.put<ApiResponse>(`${this.apiUrl}/terminals/${id}`, payload);
    }

    createTerminal(terminal: Terminal): Observable<ApiResponse> {
        delete terminal.id;
        const payload = this.utilsService.cleanObject(terminal);
        return this.http.post<ApiResponse>(`${this.apiUrl}/terminals`, payload);
    }

    deleteTerminal(id: Terminal['id']): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/terminals/${id}`);
    }

    getTerminal(terminals, id): Terminal {
        return terminals.filter(obj => obj.id === id);
    }

    // Vehicle
    getVehicle(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/vehicles${query}`);
    }

    // City, County, State
    retrieveCity(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/cities${query}`);
    }
    retrieveCounty(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/counties${query}`);
    }
    retrieveState(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/states${query}`);
    }

    // Offence
    retrieveOffence(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/offences${query}`);
    }

    updateOffence(offence: Offence): Observable<ApiResponse> {
        const id = offence.id;
        delete offence.id;
        const payload = this.utilsService.cleanObject(offence);
        return this.http.put<ApiResponse>(`${this.apiUrl}/offences/${id}`, payload);
    }

    createOffence(offence: Offence): Observable<any> {
        console.log(offence);
        delete offence.id;
        const payload = this.utilsService.cleanObject(offence);
        return this.http.post<ApiResponse>(`${this.apiUrl}/offences`, payload, httpoptions);
    }

    deleteOffence(id: Offence['id']): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/offences/${id}`);
    }

    getOneOffence(offences, id): Offence {
        return offences.filter(obj => obj.id === id);
    }

    /* // Bank - Register
    retrieveBankRegister(query = ''): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.apiUrl}/bank-registers${query}`);
    }
    deleteBankRegister(id: BankRegister['id']): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`${this.apiUrl}/bank-registers/${id}`);
    }
    createBankRegister(bankRegister: BankRegister): Observable<any> {
        console.log(bankRegister);
        delete bankRegister.id;
        const payload = this.utilsService.cleanObject(bankRegister);
        return this.http.post<ApiResponse>(`${this.apiUrl}/bank-registers`, payload, httpOptions);
    }
    updateBankRegister(bankRegister: BankRegister): Observable<ApiResponse> {
        const id = bankRegister.id;
        delete bankRegister.id;
        const payload = this.utilsService.cleanObject(bankRegister);
        return this.http.put<ApiResponse>(`${this.apiUrl}/bank-registers/${id}`, payload);
    }
    getOneBankRegister(bankRegisters, id): BankRegister {
        return bankRegisters.filter(obj => obj.id === id);
    } */

}
