import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formReg: FormGroup | any;

  constructor(private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private router: Router) {

    this.formReg = this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
  }


  onSubmit() {
    console.log(this.formReg);
    if (this.formReg.valid) {

      console.log(this.formReg);
      emailjs.init('huEw-dyYpY5dRYMR_');
      emailjs.send("service_46earmn","template_gnpdboj",{
        from_name:this.formReg.value.nombre,
        to_name:"dsf",
        from_email:this.formReg.value.email,
      });

      this._snackBar.open("Se registro con éxito", 'aceptar', {
        duration: 4 * 1000,
      });
      this.router.navigate(['/home/gracias']);
    }
  }

  servicios(){
    this._snackBar.open("No disponible de momento", 'aceptar', {
      duration: 4 * 1000,
    });
  }

}
