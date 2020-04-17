import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title='Signup';
  regForm:FormGroup;
  submitted=false;

  constructor(private formbuilder:FormBuilder) { }
 
  ngOnInit(): void {
    this.regForm = this.formbuilder.group({
      'firstname' :['', Validators.required],
      'lastname' : ['', Validators.required],
      'username' : ['', [Validators.required, Validators.minLength(5)]],
      'password' : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      'dob' : ['', Validators.required],
      'country' : ['', Validators.required]
    });

  }

  get f(){ return this.regForm.controls}

  OnSubmit(){
    this.submitted = true;
    if(this.regForm.invalid){
      return;
    }

    /*console.log(JSON.stringify(this.regForm.value));*/
    alert('SUCCESS!! :-)')

  }
}
