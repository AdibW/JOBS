import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {JOB_OPPORTUNITIES} from "../model/opportunities";
import {OpportunityModel} from "../model/Opportunity.model";
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http : HttpClient) { }


  url= 'https://d0e8-197-15-27-217.ngrok-free.app'
  public uploadfile( file : any) {

    //todo add ur url here

      let formParams = new FormData();
      formParams.append('pdf', file)
      formParams.append('name', file.name)
      // @ts-ignore
      return this.http.post<any[]>(`${this.url}/add/`, formParams )
  }


}
