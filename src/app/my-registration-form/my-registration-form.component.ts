import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-my-registration-form',
  templateUrl: './my-registration-form.component.html',
  styleUrls: ['./my-registration-form.component.css']
})
export class MyRegistrationFormComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    DOB: new FormControl(''),
    address: new FormGroup({
      city:new FormControl('')
    })
  });

  constructor() { }

  ngOnInit() : void {
  }
myformm(myform:any){
console.log(myform.controls);
}
}
