import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employeedetails } from './contactus/userdetails';

@Injectable({
  providedIn: 'root'
})
export class EmployeedetailsService {

  private _url: string = "/assets/data/employeedetails.json"; 
  
  constructor(private http: HttpClient) { }
  getemployees(){
    return this.http.get<employeedetails[]>(this._url)
  }
}
