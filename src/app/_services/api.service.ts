﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
 } from '../_models';
import { UtilsService } from './utils.service';

@Injectable({ providedIn: 'root' })

export class ApiService {

    apiUrl = environment.PEACE_API;
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
    getPmlWaybill(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/pml-waybills${query}`);
    }

    getPmtWaybill(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/pmt-waybills${query}`);
    }
    getRating(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/ratings${query}`);
    }

    getSchedule(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/pmt-schedules${query}`);
    }
    getSpares(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/spares${query}`);
    }

    getStaff(query = '') {
        return this.http.get<ApiResponse>(`${this.apiUrl}/staff${query}`);
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
}
