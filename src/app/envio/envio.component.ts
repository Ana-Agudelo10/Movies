import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service'; // Importa el servicio de productos
import { CommonModule } from '@angular/common'; // Importa el módulo común de Angular
import { Product } from '../modelo';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import {Router, ActivatedRoute} from '@angular/router'; // Importa Router y ActivatedRoute para la navegación y obtención de parámetros de ruta
// guardado de los datos al componente lista que es donde a iniciado angular
//Importar forms modulo para el servicio de enviar fomulario


@Component({
  selector: 'app-envio',
  imports: [CommonModule, FormsModule, RouterModule],
  standalone: true,
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
  
  accion: 'guardar' | 'editar' = 'guardar';


  onSubmit() {
  if (this.accion === 'guardar') {
    this.guardar();
  } else if (this.accion === 'editar') {
    this.editar();
  }
}

  constructor(private productosService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    console.log('Parametros:', params);
    
    if(params['id']) {
      this.productosService.getTipificacion(params['id']).subscribe({
        next: (data: Product) => {
          console.log('Producto obtenido:', data);
          this.productos = data;
        },
        error: (err) => console.error('Error al obtener producto:', err)
      });
    }
  }

  guardar(){
    console.log('Guardando producto:', this.productos);
    delete this.productos.id;
    if (!this.productos.date) delete this.productos.date;
    this.productosService.guardar1(this.productos).subscribe({
      next: (data: Product) => {
        console.log('Producto guardado:', data);
        this.router.navigate(['lista']); // Limpiar el formulario después de guardar
      },
      error: (err) => console.error('Error al guardar producto:', err)
    });
  }

  editar(): void{
    this.productosService.update(this.productos.id, this.productos).subscribe({
      next: (data: Product) => {
        console.log('Producto editado:', data);
        this.router.navigate(['lista']);
      },
      error: (err) => console.error('Error al editar producto:', err)
    });
  }
}
