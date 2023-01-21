import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerDataForm!: FormGroup;
  showPassword: boolean = true;
  textInputError: string = '';
  textInputErrorPassword : string = 'Usa 8 o más caracteres con una combinación de letras, números y símbolos';
  boolTextPassword : boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerDataForm = this.formBuilder.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(8)],
      confirmPassword: ['', Validators.required, Validators.minLength(8)],
    });
  }

  async validateForm(form: FormGroup) {
    form.markAllAsTouched();
    let validForm = form.valid;

    if(this.registerDataForm.controls.last_name.invalid && this.registerDataForm.controls.name.invalid) {
      this.textInputError = 'Ingresa el nombre y el apellido';
    }else if(this.registerDataForm.controls.name.invalid){
      this.textInputError = 'Ingresa tu nombre.';
    }else if(this.registerDataForm.controls.last_name.invalid) {
      this.textInputError = 'Ingresa tu apellido.';
    }else {
      this.textInputError = '';
    }

    if(this.registerDataForm.controls.password.invalid){
      this.textInputErrorPassword = 'Ingresar contraseña';
      this.boolTextPassword = true;
    }else if(this.registerDataForm.controls.confirmPassword.invalid){
      this.textInputErrorPassword = 'Confirma tu contraseña';
      this.boolTextPassword = true;
    }else {
      this.boolTextPassword = false;
      this.textInputErrorPassword  = 'Usa 8 o más caracteres con una combinación de letras, números y símbolos';
    }
    validForm ? this.nextPages() : null
  }

  nextPages(){
    this.router.navigate(['/dashboard']);
  }

  backLogin(){
    this.router.navigate(['/login']);

  }
}
