import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service'; // Importa el servicio de productos
import { CommonModule } from '@angular/common'; // Importa el módulo común de Angular
import { Product } from '../modelo';
import {Router, ActivatedRoute} from '@angular/router'; // Importa Router y ActivatedRoute para la navegación y obtención de parámetros de ruta
// guardado de los datos al componente lista que es donde a iniciado angular
//Importar forms modulo para el servicio de enviar fomulario


@Component({
  selector: 'app-envio',
  imports: [CommonModule],
  templateUrl: './envio.component.html',
  styleUrl: './envio.component.css'
})
export class EnvioComponent implements OnInit{

  productos: Product = {
    id: 0,
    title: '',
    description: '',
    genero: '',
    image: '',
    date: '',
    creator: '',
    video: ''
  }; 
  

  constructor(private productosService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }

  guardar(){
    delete this.productos.id;
    this.productosService.Guardar1(this.productos).subscribe({
      next: (data: Product) => {
        console.log('Producto guardado:', data);
        this.router.navigate(['/lista']); // Limpiar el formulario después de guardar
      },
      error: (err) => console.error('Error al guardar producto:', err)
    });
  }
}
