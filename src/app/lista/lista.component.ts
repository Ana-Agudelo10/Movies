import { Component, OnInit, RESPONSE_INIT } from '@angular/core'; // Importa los módulos necesarios de Angular
import { ProductosService } from '../productos.service'; // Importa el servicio de productos
import {Router, ActivatedRoute} from '@angular/router'; // Importa los módulos de enrutamiento de Angular (para otra ruta)
import { Modelo } from '../modelo';
// OnInit (se inicializa el componente)
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  modelo: any=[]; // Inicializa un array vacío para almacenar los productos
  constructor(private ProductosServicio: ProductosService, private router: Router, private activateRouter: ActivatedRoute) { } // Constructor de la clase ListaComponent

  ngOnInit(): void {
    this.lista1(); //Corre lo que hay dentro de la losa. comunicación con el servidor // Método que se ejecuta al inicializar el componente
  }

  lista1() { // Método que se ejecuta al inicializar el componente
    this.ProductosServicio.ListaProductos().subscribe( // Llama al servicio de productos y se suscribe a los datos
      res => {
        this.modelo = res;// Asigna la respuesta del servicio al modelo (array de productos)
      },
      err=> console.log(err) // Maneja el error si ocurre7789
    );

  } // Fin del método lista1
}

//Creación de componente: ng g c lista