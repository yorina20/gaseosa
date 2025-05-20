// src/app/services/proveedor.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface Proveedor {
  id: number;
  nombre: string;
  telefono?: string;
  direccion?: string;
  // añade aquí más campos según tu modelo
}

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private base = `${environment.apiUrl}/proveedor`;

  constructor(private http: HttpClient) {}

  getProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.base);
  }

  getProveedor(id: number): Observable<Proveedor> {
    return this.http.get<Proveedor>(`${this.base}/${id}`);
  }

  createProveedor(data: Partial<Proveedor>): Observable<Proveedor> {
    return this.http.post<Proveedor>(this.base, data);
  }

  updateProveedor(id: number, data: Partial<Proveedor>): Observable<Proveedor> {
    return this.http.patch<Proveedor>(`${this.base}/${id}`, data);
  }

  deleteProveedor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
