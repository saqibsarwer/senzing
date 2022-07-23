import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formInitializer();
  }

  formInitializer() {
    this.loginForm = this.fb.group({
      username:['',[Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  get username(){
    return this.loginForm.get('username')!;
  }
  get password(){
    return this.loginForm.get('password')!;
  }

  login() {
    if(this.loginForm.valid) {
      if(this.username.value=='admin' && this.password.value=='admin') {
        this.router.navigate(["home"]);
      }
      else {
        console.log('wrong password');

      }
    }
  }
}
