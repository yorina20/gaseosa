import { Component,Inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {  MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Cliente } from '../table-proveedor/table-proveedor.component';



@Component({
  standalone: true,
  selector: 'app-agregar-cliente',
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
 clienteForm: FormGroup;
titulo: any;

  constructor(
     private fb: FormBuilder,
  private dialogRef: MatDialogRef<AgregarClienteComponent>,
  @Inject(MAT_DIALOG_DATA) public data: { cliente?: Cliente; titulo: string }
) {
  this.titulo = data?.titulo || 'Agregar Cliente';
  const cliente = data?.cliente;

  this.clienteForm = this.fb.group({
    nombre: [cliente?.nombre || '', Validators.required],
    apellido: [cliente?.apellido || '', Validators.required],
    telefono: [cliente?.telefono || '', Validators.required],
    direccion: [cliente?.direccion || '', Validators.required],
    dni: [cliente?.dni || '', Validators.required],
  });
}

  cerrar() {
    this.dialogRef.close();
  }

  guardar() {
    if (this.clienteForm.valid) {
      const clienteEditado = this.clienteForm.value;
      this.dialogRef.close(clienteEditado);
    }
  }
}
