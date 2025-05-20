import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [
    CommonModule, CommonModule, HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
editarProducto(_t128: any) {
throw new Error('Method not implemented.');
}
  displayedColumns: string[] = [
    'id',
    'imagen',
    'nombre',
    'descripcion',
    'stock',
    'precio',
    'marca',
    'tipo_botella',
    'tipo_bebida',
    'acciones'
  ];

  productosEjemplo = [
    {
      id: 1,
      imagen: 'https://via.placeholder.com/50',
      nombre: 'Coca-Cola',
      descripcion: 'Bebida gaseosa',
      stock: 100,
      precio: 1.5,
      marca: 'Coca-Cola Company',
      tipo_botella: 'Plástico',
      tipo_bebida: 'Gaseosa'
    },
    {
      id: 2,
      imagen: 'https://via.placeholder.com/50',
      nombre: 'Pepsi',
      descripcion: 'Bebida cola',
      stock: 80,
      precio: 1.4,
      marca: 'PepsiCo',
      tipo_botella: 'Vidrio',
      tipo_bebida: 'Gaseosa'
    }
  ];

  dataSource = new MatTableDataSource(this.productosEjemplo);

  aplicarFiltro(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valor.trim().toLowerCase();
  }
}
