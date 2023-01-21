import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDataForm!: FormGroup;
  showPassword: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginDataForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  nextPages(){
    this.router.navigate(['/dashboard']);
  }


  async validateForm(form: FormGroup) {
    form.markAllAsTouched();
    let validForm = form.valid;

    validForm ? this.nextPages() : null
  }

  viewPassword(){
    this.showPassword =! this.showPassword
  }
}
