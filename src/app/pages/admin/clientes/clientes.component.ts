import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { VerPedidosClienteComponent } from './ver-pedido/ver-pedido.component';

interface Pedido {
  id: number;
  total: number;
  estado: 'PENDIENTE' | 'ENVIADO' | 'ENTREGADO' | 'CANCELADO';
  creadoEn: Date;
}

interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  direccion: string;
  dni: string;
  pedidos: Pedido[];
}

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    VerPedidosClienteComponent,
  ],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  displayedColumns = [
    'id',
    'nombre',
    'apellido',
    'telefono',
    'direccion',
    'dni',
    'totalPedidos',
    'estadoUltimoPedido',
    'acciones',
  ];

  clientes = new MatTableDataSource<Cliente>([]);

  private dialog = inject(MatDialog);

  ngOnInit() {
    const clientesData: Cliente[] = [
      {
        id: 1,
        nombre: 'Juan',
        apellido: 'Pérez',
        telefono: '123456789',
        direccion: 'Calle Falsa 123',
        dni: '12345678',
        pedidos: [
          { id: 101, total: 150.0, estado: 'ENTREGADO', creadoEn: new Date('2025-01-01') },
          { id: 102, total: 200.0, estado: 'PENDIENTE', creadoEn: new Date('2025-04-15') },
        ],
      },
      {
        id: 2,
        nombre: 'María',
        apellido: 'Gómez',
        telefono: '987654321',
        direccion: 'Av. Siempre Viva 742',
        dni: '87654321',
        pedidos: [
          { id: 201, total: 300.0, estado: 'ENVIADO', creadoEn: new Date('2025-02-20') },
        ],
      },
    ];

    this.clientes.data = clientesData;
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.clientes.filter = filterValue.trim().toLowerCase();
  }

  obtenerEstadoUltimoPedido(pedidos: Pedido[]): string {
    if (!pedidos || pedidos.length === 0) {
      return 'Sin pedidos';
    }
    const ultimoPedido = pedidos.sort((a, b) => b.creadoEn.getTime() - a.creadoEn.getTime())[0];
    return ultimoPedido.estado;
  }

  getEstadoColor(estado: string): string {
    switch (estado) {
      case 'ENTREGADO': return 'text-success';
      case 'PENDIENTE': return 'text-warning';
      case 'ENVIADO': return 'text-info';
      case 'CANCELADO': return 'text-danger';
      default: return '';
    }
  }

  verPedidos(cliente: Cliente) {
    this.dialog.open(VerPedidosClienteComponent, {
      width: '700px',
      data: cliente.pedidos
    });
  }

  editarCliente(cliente: Cliente) {
    console.log('Editar cliente:', cliente);
  }

  eliminarCliente(cliente: Cliente) {
    console.log('Eliminar cliente:', cliente);
  }
}
