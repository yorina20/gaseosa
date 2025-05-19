import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
<<<<<<< HEAD
import { LoginComponent } from './pages/login/login.component'; 
=======
import { LoginProveedorComponent } from './pages/login-proveedor/login-proveedor.component';
import { ProveedorComponent } from './pages/proveedor/proveedor.component';
import { InicioClienteComponent } from './pages/cliente/inicio-cliente/inicio-cliente.component';
import { VentaComponent } from './pages/cliente/venta/venta.component';
import { AgregarClienteComponent } from './pages/proveedor/agregar-cliente/agregar-cliente.component';
import { LoginClienteComponent } from './pages/login-cliente/login-cliente.component';
>>>>>>> 8b096f8cd58b69319a47301fcef4a030571f2129
import { ClienteComponent } from './pages/cliente/cliente.component';
import {  AdminComponent } from './pages/admin/admin.component';
import { ClientesComponent } from './pages/admin/clientes/clientes.component';
import { ProductoComponent } from './pages/admin/producto/producto.component';
import { CategoriaComponent } from './pages/admin/categoria/categoria.component';

export const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: InicioComponent }, 
  { path: 'login', component: LoginComponent }, 
  {
    path: 'proveedor',
    loadComponent: () =>
      import('./pages/proveedor/proveedor.component').then(m => m.ProveedorComponent)
  },
  { path: 'cliente', component: ClienteComponent },

=======
  { path: '', component: InicioComponent },
  { path: 'login-proveedor', component: LoginProveedorComponent },
  { path: 'login-cliente', component: LoginClienteComponent } ,
  { path: 'inicio-cliente', component: InicioClienteComponent},
  { path: 'ventas', component:VentaComponent},
  
  
>>>>>>> 8b096f8cd58b69319a47301fcef4a030571f2129
   {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'clientes', // cuando vayas a /admin, redirige a /admin/clientes
        pathMatch: 'full',
      },
      {
        path: 'clientes',
        component: ClientesComponent,
      },
      {
        path: 'producto',
        component: ProductoComponent,
      },
      {
        path: 'categoria',
        component: CategoriaComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'admin',
  },
];
