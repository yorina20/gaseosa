import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ver-pedidos-cliente',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './ver-pedido.component.html',
  styleUrls: ['./ver-pedido.component.scss']
})
export class VerPedidosClienteComponent {
  displayedColumns: string[] = ['id', 'total', 'estado', 'fecha'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public pedidos: any[],
    private dialogRef: MatDialogRef<VerPedidosClienteComponent>
  ) {}

  cerrar() {
    this.dialogRef.close();
  }
}
