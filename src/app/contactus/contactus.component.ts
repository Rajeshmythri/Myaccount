import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'; 
import { EmployeedetailsService } from '../employeedetails.service';
interface userdetails{
  login: string,
  bio: string,
  company: string;
}
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  employeedetails=[];
  constructor(private http: HttpClient, private httpemp:EmployeedetailsService) { }
  ngOnInit() {
    this.httpemp.getemployees()
    .subscribe(data => this.employeedetails=data);

    this.http.get<userdetails>('https://api.github.com/users/seeschweiler').subscribe(
      data => {
      console.log('Login:',data);
      console.log('bio:',data.bio);
      console.log('companyo:',data.company);
    },
    (err: HttpErrorResponse ) => {
      if(err.error instanceof Error){
      console.log('Error accured');
      }else{
        console.log(' Serverside Error accured');
      }
  } 
  )
  const req = this.http.post('https://jsonplaceholder.typicode.com/posts',
  {title: 'Mythri Hospitals',
   body: 'Hospitals',
    userid: 1 })
    .subscribe(res => {console.log(res)},
    err =>{
      console.log('Error occured');
    }
  )
  }

}
