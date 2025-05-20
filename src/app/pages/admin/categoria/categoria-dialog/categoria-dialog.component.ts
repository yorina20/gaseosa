// src/app/pages/categoria/categoria-dialog.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-categoria-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './categoria-dialog.component.html',
  styleUrls: ['./categoria-dialog.component.scss'],
})
export class CategoriaDialogComponent {
   opcionSeleccionada: string = '';
  nombre: string = '';
  descripcion: string = '';

  constructor(
    private dialogRef: MatDialogRef<CategoriaDialogComponent>
  ) {}

  cancelar() {
    this.dialogRef.close();
  }

  guardar() {
    let nuevoElemento: any;

    if (this.opcionSeleccionada === 'tipoBebida' || this.opcionSeleccionada === 'marca') {
      nuevoElemento = { nombre: this.nombre };
    } else if (this.opcionSeleccionada === 'tamanioEnvase') {
      nuevoElemento = { descripcion: this.descripcion };
    }

    this.dialogRef.close({
      tipo: this.opcionSeleccionada,
      data: nuevoElemento,
    });
  }
}
