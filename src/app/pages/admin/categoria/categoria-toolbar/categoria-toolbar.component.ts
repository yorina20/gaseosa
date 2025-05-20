import { Component, Output, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-categoria-toolbar',
  standalone: true,
  templateUrl: './categoria-toolbar.component.html',
  styleUrls: ['./categoria-toolbar.component.scss'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class CategoriaToolbarComponent {
  @Output() buscar = new EventEmitter<string>();
  @Output() agregar = new EventEmitter<void>();

  onBuscar(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.buscar.emit(value.trim().toLowerCase());
  }

  onAgregar() {
    this.agregar.emit();
  }
}
