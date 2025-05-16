import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginProveedorComponent } from './pages/login-proveedor/login-proveedor.component';
import { ProveedorComponent } from './pages/proveedor/proveedor.component';

import { AgregarClienteComponent } from './pages/proveedor/agregar-cliente/agregar-cliente.component';
import { LoginClienteComponent } from './pages/login-cliente/login-cliente.component';
import { ClienteComponent } from './pages/cliente/cliente.component';



export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login-proveedor', component: LoginProveedorComponent },
  { path: 'login-cliente', component: LoginClienteComponent } ,
   {
  path: 'proveedor',
  loadComponent: () =>
    import('./pages/proveedor/proveedor.component').then((m) => m.ProveedorComponent),
},
{ path: 'cliente', component: ClienteComponent },
//{ path: 'proveedor', component: ProveedorComponent },
 //{ path: 'agregar-clientes', component: AgregarClienteComponent },
];