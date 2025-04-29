import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private API_URL = 'http://localhost:8080/producto'; // Cambia esto por la URL de tu API

  constructor(private http1: HttpClient) { }

  //Controlador

  ListaProductos(){
    //URL del controlador
    //Backtics
    return this.http1.get(this.API_URL);
  }
}
