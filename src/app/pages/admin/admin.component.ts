import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenavContent } from '@angular/material/sidenav';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ClientesComponent } from "./clientes/clientes.component";

import { Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
//import { CategoriaComponent } from './categoria/categoria.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule, MatSidenavContent,ProductoComponent,
    RouterModule,
    MatSidenavModule,
    HeaderComponent,
    SidebarComponent,
    ClientesComponent
],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {}
