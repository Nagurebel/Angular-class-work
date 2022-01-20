import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm=new FormGroup({
  uemail:new FormControl("",[Validators.required,Validators.email]),//  or validators.minlength(8)
  upass:new FormControl("",[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')]),
  uage:new FormControl("",[Validators.required,Validators.pattern('^(0?[1-9]|[1-9][0-9]|[1][0-9][0-9]|200)$')]),
  ustate:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-z]+$')]),
  ucity:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-z]+$')]),
 ugender:new FormControl("",[Validators.required]), 
 uphone:new FormControl("",[Validators.required,Validators.maxLength(13),Validators.minLength(10)])
})

get uemail(){
  return this.loginForm.get('uemail')
}

get upass(){
  return this.loginForm.get('upass')
}

get uage(){
  return this.loginForm.get('uage')
}

get ustate(){
  return this.loginForm.get('ustate')
}

get ucity(){
  return this.loginForm.get("ucity")
}
 
get ugender(){
  return this.loginForm.get('ugender')
}
get uphone(){
  return this.loginForm.get('uphone')
}


login(){
console.log(this.loginForm.value);
}


  constructor() { }

  ngOnInit(): void {
  }

}
