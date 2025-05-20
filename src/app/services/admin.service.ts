// src/app/services/admin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  // …
}
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  // …
}
export interface Categoria {
  id: number;
  nombre: string;
  // …
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // — CLIENTES —
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.base}/cliente`);
  }
  createCliente(data: Partial<Cliente>): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.base}/cliente`, data);
  }
  updateCliente(id: number, data: Partial<Cliente>): Observable<Cliente> {
    return this.http.patch<Cliente>(`${this.base}/cliente/${id}`, data);
  }
  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/cliente/${id}`);
  }

  // — PRODUCTOS —
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.base}/producto`);
  }
  createProducto(data: Partial<Producto>): Observable<Producto> {
    return this.http.post<Producto>(`${this.base}/producto`, data);
  }
  updateProducto(id: number, data: Partial<Producto>): Observable<Producto> {
    return this.http.patch<Producto>(`${this.base}/producto/${id}`, data);
  }
  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/producto/${id}`);
  }

  // — CATEGORÍAS —
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.base}/categoria`);
  }
  createCategoria(data: Partial<Categoria>): Observable<Categoria> {
    return this.http.post<Categoria>(`${this.base}/categoria`, data);
  }
  updateCategoria(id: number, data: Partial<Categoria>): Observable<Categoria> {
    return this.http.patch<Categoria>(`${this.base}/categoria/${id}`, data);
  }
  deleteCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/categoria/${id}`);
  }
}
