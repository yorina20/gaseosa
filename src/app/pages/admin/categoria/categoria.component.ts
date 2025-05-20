import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { CategoriaToolbarComponent } from './categoria-toolbar/categoria-toolbar.component';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaDialogComponent } from './categoria-dialog/categoria-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [
    CommonModule,CategoriaDialogComponent, MatDialogModule,
    MatTableModule,
    CategoriaToolbarComponent
  ],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  // Convertimos los arrays en MatTableDataSource
  dataTipoBebida = new MatTableDataSource([
  { id: 1, nombre: 'Cerveza' },
  { id: 2, nombre: 'Vino' },
  { id: 3, nombre: 'Whisky' },
]);

dataTamanioEnvase = new MatTableDataSource([
  { id: 1, descripcion: '350ml' },
  { id: 2, descripcion: '500ml' },
  { id: 3, descripcion: '1L' },
]);

dataMarca = new MatTableDataSource([
  { id: 1, nombre: 'Corona' },
  { id: 2, nombre: 'Heineken' },
  { id: 3, nombre: 'Jack Daniels' },
]);

  ngOnInit(): void {
    // Configura el filtro para que solo se aplique al campo `nombre`
    this.dataTipoBebida.filterPredicate = (data, filter) =>
      data.nombre.toLowerCase().includes(filter);
  }

  filtrar(valor: string) {
    this.dataTipoBebida.filter = valor.trim().toLowerCase();
  }

  constructor(private dialog: MatDialog) {}
    generarId(array: any[]): number {
    if (!array || array.length === 0) return 1;
    const ids = array
      .filter(item => item && typeof item.id === 'number')
      .map(item => item.id);
    return ids.length ? Math.max(...ids) + 1 : 1;
  }

abrirAgregar() {
  const dialogRef = this.dialog.open(CategoriaDialogComponent, {
    width: '400px',
  });

  dialogRef.afterClosed().subscribe((resultado) => {
    if (resultado) {
      const { tipo, data } = resultado;

      if (tipo === 'tipoBebida') {
        const id = this.generarId(this.dataTipoBebida.data);
        this.dataTipoBebida.data = [...this.dataTipoBebida.data, { id, ...data }];
      } else if (tipo === 'tamanioEnvase') {
        const id = this.generarId(this.dataTamanioEnvase.data);
        this.dataTamanioEnvase.data = [...this.dataTamanioEnvase.data, { id, ...data }];
      } else if (tipo === 'marca') {
        const id = this.generarId(this.dataMarca.data);
        this.dataMarca.data = [...this.dataMarca.data, { id, ...data }];
      }
    }
  });
}

}
