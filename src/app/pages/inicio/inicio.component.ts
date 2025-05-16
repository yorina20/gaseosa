import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LoginProveedorComponent } from '../login-proveedor/login-proveedor.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,LoginProveedorComponent,
    HeaderComponent,
    FooterComponent,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {}
