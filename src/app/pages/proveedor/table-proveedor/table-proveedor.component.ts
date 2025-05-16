import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { A11yModule } from '@angular/cdk/a11y';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AgregarClienteComponent } from '../agregar-cliente/agregar-cliente.component';


export interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  direccion: string;
  dni: string;
}

const ELEMENT_DATA: Cliente[] = [
  { id: 1, nombre: 'Juan', apellido: 'Pérez', telefono: '123456789', direccion: 'Calle Falsa 123', dni: '12345678' },
  { id: 2, nombre: 'Ana', apellido: 'Gómez', telefono: '987654321', direccion: 'Av. Siempre Viva 742', dni: '87654321' },
];

@Component({
  selector: 'app-table-proveedor',
  templateUrl: './table-proveedor.component.html',
  styleUrls: ['./table-proveedor.component.scss'],
  imports: [
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule, MatDialogModule, 
    A11yModule,
    AgregarClienteComponent
  ],
  standalone: true
})
export class TableProveedorComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'telefono', 'direccion', 'dni', 'acciones'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private dialog: MatDialog  // <-- Inyecta MatDialog aquí
  ) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Ordenado de forma ${sortState.direction}ente`);
    } else {
      this._liveAnnouncer.announce('Ordenamiento eliminado');
    }
  }

  aplicarFiltro(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  agregarCliente() {
    this.dialog.open(AgregarClienteComponent, {
      width: '400px'
    });
  }

  editarCliente(cliente: Cliente) {
    console.log('Editar cliente:', cliente);
    // Aquí puedes navegar a un formulario o abrir un diálogo
  }

  eliminarCliente(cliente: Cliente) {
    console.log('Eliminar cliente:', cliente);
    // Aquí puedes mostrar confirmación y luego eliminar
  }
}
