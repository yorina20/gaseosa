import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.scss']
})
export class LoginClienteComponent {
  usuario: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.usuario === 'cliente' && this.password === '1234') {
      this.router.navigate(['/cliente']);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}
