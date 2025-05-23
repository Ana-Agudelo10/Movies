import { Component, OnInit } from '@angular/core'; // Importa los módulos necesarios de Angular
import { ProductosService } from '../productos.service'; // Importa el servicio de productos
import { Product } from '../modelo';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// OnInit (se inicializa el componente)
@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  productos: Product[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.ListaProductos().subscribe({
      next: (data: Product[]) => (this.productos = data),
      error: (err) => console.error('Error al obtener productos:', err),
    });
  }

  eliminarProducto(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar esta pelicula?')) {
      this.productosService.eliminarProducto(id).subscribe({
        next: () => {
          this.productos = this.productos.filter(
            (producto) => producto.id !== id
          );
          console.log(`Pelicula con ID ${id} eliminada`);
        },
        error: (err) => console.error('Error al eliminar la pelicula:', err),
      });
    }
  }
}
