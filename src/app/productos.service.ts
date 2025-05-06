import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './modelo'; // Asegúrate de que la interfaz esté bien importada

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  private API_URL = 'http://localhost:8080/movie'; // Cambia esto por la URL de tu API

  constructor(private http1: HttpClient) { }

  //Controlador

  ListaProductos(): Observable<Product[]> {
    return this.http1.get<Product[]>(this.API_URL);
  }

  Guardar1(product: Product): Observable<Product> {
    return this.http1.post<Product>(this.API_URL, product);
  }
}
