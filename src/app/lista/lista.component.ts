import { Component, OnInit } from '@angular/core'; // Importa los módulos necesarios de Angular
import { ProductosService } from '../productos.service'; // Importa el servicio de productos
import { Product } from '../modelo';
import { CommonModule } from '@angular/common';

// OnInit (se inicializa el componente)
@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit{

  productos: Product[] = []; 

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.ListaProductos().subscribe({
      next: (data: Product[]) => this.productos = data,
      error: (err) => console.error('Error al obtener productos:', err)
    });
  }
}

//Creación de componente: ng g c lista