import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

private usuariosDemo = [
  { usuario: 'cliente', contrasena: '1234', tipo: 'cliente' },
  { usuario: 'proveedor', contrasena: '1234', tipo: 'proveedor' },
  { usuario: 'admin', contrasena: '1234', tipo: 'admin' }
];

constructor(private fb: FormBuilder, private router: Router) {
  this.loginForm = this.fb.group({
    usuario: ['', Validators.required],
    contrasena: ['', Validators.required],
  });
}

login() {
  const { usuario, contrasena } = this.loginForm.value;
  console.log('Valores ingresados:', { usuario, contrasena });

  const usuarioEncontrado = this.usuariosDemo.find(
    u => u.usuario === usuario && u.contrasena === contrasena
  );
  console.log('Usuario encontrado:', usuarioEncontrado);

  if (usuarioEncontrado) {
    if (usuarioEncontrado.tipo === 'cliente') {
      this.router.navigate(['/cliente']);
    } else if (usuarioEncontrado.tipo === 'proveedor') {
      this.router.navigate(['/proveedor']);
    } else if (usuarioEncontrado.tipo === 'admin') {
      this.router.navigate(['/admin']);
    }
  } else {
    alert('Usuario o contraseña incorrectos');
  }
}

  cerrar() {
    this.router.navigate(['/']);  
  }
}