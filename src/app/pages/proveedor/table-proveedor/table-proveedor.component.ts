import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


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
    private dialog: MatDialog
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
  const dialogRef = this.dialog.open(AgregarClienteComponent, {
    width: '400px',
    data: { titulo: 'Agregar Cliente' }
  });

  dialogRef.afterClosed().subscribe((nuevoCliente: Omit<Cliente, 'id'>) => {
    if (nuevoCliente) {
      const nuevoId = this.dataSource.data.length
        ? Math.max(...this.dataSource.data.map(c => c.id)) + 1
        : 1;

      const clienteConId: Cliente = { id: nuevoId, ...nuevoCliente };
      this.dataSource.data = [...this.dataSource.data, clienteConId];
    }
  });
}

editarCliente(cliente: Cliente) {
  const dialogRef = this.dialog.open(AgregarClienteComponent, {
    width: '400px',
    data: { cliente: cliente, titulo: 'Editar Cliente' }
  });

  dialogRef.afterClosed().subscribe((clienteEditado: Cliente) => {
    if (clienteEditado) {
      const dataActualizada = this.dataSource.data.map(c => {
        if (c.id === cliente.id) {
          return { ...c, ...clienteEditado };
        }
        return c;
      });
      this.dataSource.data = dataActualizada;
    }
  });
}

eliminarCliente(cliente: Cliente) {
  if (confirm(`¿Estás seguro de eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`)) {
    this.dataSource.data = this.dataSource.data.filter(c => c.id !== cliente.id);
  }
}
}