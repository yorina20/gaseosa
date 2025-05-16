import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login-proveedor',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login-proveedor.component.html',
  styleUrls: ['./login-proveedor.component.scss']
})
export class LoginProveedorComponent {
  usuario: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.usuario === 'admin' && this.password === '1234') {
      this.router.navigate(['/proveedor']);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}
