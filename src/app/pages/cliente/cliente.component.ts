import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet,RouterLink  } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-cliente',
  imports: [MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
  RouterLink,
RouterOutlet],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClienteComponent {

  title = 'proyecto';//atributo
 
  menuItems:any[] =[
    {
      icon:'apps',
      label:'Lista de productos',
      route:'inicio-cliente'
    },
    {
      icon:'add',
      label:'Seccion de ventas',
      route:'ventas'
    },
  ]
 }
