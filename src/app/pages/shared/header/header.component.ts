import { Component, Input } from '@angular/core';  // Importas Input aquí, pero NO en imports
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatMenuModule, MatIconModule, MatButtonModule], // Aquí sin Input
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() titulo: string = 'Gaseosas Sabrosas'; 
  @Input() mostrarBotones: boolean = true;  // Aquí usas @Input()
}
