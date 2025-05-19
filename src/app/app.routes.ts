import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ClientesComponent } from './pages/admin/clientes/clientes.component';
import { ProductoComponent } from './pages/admin/producto/producto.component';
import { CategoriaComponent } from './pages/admin/categoria/categoria.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'proveedor',
    loadComponent: () =>
      import('./pages/proveedor/proveedor.component').then(m => m.ProveedorComponent),
  },

  { path: 'cliente', component: ClienteComponent },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'clientes',
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

  // Redirecciones de seguridad
  { path: '**', redirectTo: '' },
];
