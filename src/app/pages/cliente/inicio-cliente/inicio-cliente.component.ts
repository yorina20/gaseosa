import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-inicio-cliente',
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './inicio-cliente.component.html',
  styleUrl: './inicio-cliente.component.scss'
})
export class InicioClienteComponent {

}
