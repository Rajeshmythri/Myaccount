import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  show = false;
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
//  @Input() childmessage: string;
 constructor() {}
   ngOnInit() {  
   }
}
