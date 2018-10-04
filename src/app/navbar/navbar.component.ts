import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from '../home/home.component';
// import { CareerComponent } from '../career/career.component';
// const routes: Routes = [
//   { path: 'home', component: HomeComponent},
//   { path: 'career', component: CareerComponent}
//  ];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  parentmessage = 'Parent Message here!';
  constructor() { }

  ngOnInit() {  }

  

}
