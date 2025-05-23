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

  guardar1(product: Product): Observable<Product> {
    return this.http1.post<Product>(this.API_URL, product);
  }

  //Observable (conocer que llega)
  update( id: any,  modelo: any):Observable<any>{
    return this.http1.put(`${this.API_URL}/${id}`, modelo);
  }

  getTipificacion(id: string){
    return this.http1.get(`${this.API_URL}/${id}`);
  }

  
  eliminarProducto(id: number): Observable<Product> {
    return this.http1.delete<Product>(`${this.API_URL}/${id}`);
  }
}
