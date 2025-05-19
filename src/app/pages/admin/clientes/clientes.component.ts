import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  dataSource: any;
aplicarFiltro(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'telefono', 'direccion', 'dni', 'acciones'];
  clientes = [
    { id: '01', nombre: 'rosa', apellido: 'morita morita', telefono: '912345678', direccion: 'Av.angeles', dni: '71243568' },
    { id: '02', nombre: 'mora', apellido: 'morita morita', telefono: '912345678', direccion: 'Av.angeles', dni: '71243568' },
    { id: '03', nombre: 'mora', apellido: 'morita morita', telefono: '912345678', direccion: 'Av.angeles', dni: '71243568' }
  ];
  
}
