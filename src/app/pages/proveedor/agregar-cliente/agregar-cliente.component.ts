import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';



@Component({
  selector: 'app-agregar-cliente',
  standalone: true,
  imports: [
    CommonModule, MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss']
})
export class AgregarClienteComponent {
  

  constructor(private dialogRef: MatDialogRef<AgregarClienteComponent>) {}

  cerrar() {
    this.dialogRef.close();
  }

  guardar() {
    // Aquí iría la lógica para guardar el cliente (formulario, validaciones, etc)
    // Por ahora solo cerramos el diálogo:
    this.dialogRef.close();
  }
}
