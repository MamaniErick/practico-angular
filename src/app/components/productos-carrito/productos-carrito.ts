import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto.model'; // Importamos el modelo
import { CarritoService } from '../../services/carrito.service'; // Importamos el servicio

@Component({
  selector: 'app-productos-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos-carrito.html',
  styleUrl: './productos-carrito.css'
})
export class ProductosCarrito {
  private carritoService = inject(CarritoService);
  
  productos: Producto[] = [
    {
      nombre: "Notebook Gamer Pro",
      descripcion: "Procesador i7, 16GB RAM, SSD 512GB, RTX 3060.",
      precio: 1250000,
      imagen: "img/productos/notebook-gamer.jpg",
      cantidad: 1
    },
    {
      nombre: "Monitor 24' Full HD",
      descripcion: "Panel IPS, 75Hz, bordes ultra delgados.",
      precio: 185000,
      imagen: "img/productos/monito-24.jpg",
      cantidad: 1
    },
    {
      nombre: "Teclado Mecánico RGB",
      descripcion: "Switches Blue, retroiluminado, distribución español.",
      precio: 45000,
      imagen: "img/productos/teclado-rgb.jpg",
      cantidad: 1
    },
    {
      nombre: "Mouse Óptico 16000 DPI",
      descripcion: "6 botones programables, sensor de alta precisión.",
      precio: 28000,
      imagen: "img/productos/mouse-gamer.jpg",
      cantidad: 1
    },
    {
      nombre: "Auriculares con Micrófono",
      descripcion: "Sonido envolvente 7.1, cancelación de ruido.",
      precio: 62000,
      imagen: "img/productos/auriculares.jpg",
      cantidad: 1
    },
    {
      nombre: "Tablet 10' Pro",
      descripcion: "Pantalla Retina, 128GB, compatible con lápiz óptico.",
      precio: 350000,
      imagen: "img/productos/tablet-pro.jpg",
      cantidad: 1
    },
    {
      nombre: "Smartwatch Deportivo",
      descripcion: "GPS integrado, sensor cardíaco, sumergible 50m.",
      precio: 89000,
      imagen: "img/productos/smartwach.jpg",
      cantidad: 1
    },
    {
      nombre: "Impresora Multifunción",
      descripcion: "Sistema continuo, Wi-Fi, escáner de alta resolución.",
      precio: 210000,
      imagen: "img/productos/impresora.jpg",
      cantidad: 1
    },
    {
      nombre: "Disco Externo 1TB",
      descripcion: "USB 3.2, alta velocidad de transferencia, antigolpes.",
      precio: 75000,
      imagen: "img/productos/disco-externo.jpg",
      cantidad: 1
    },
    {
      nombre: "Cámara Web 4K",
      descripcion: "Enfoque automático, micrófono dual integrado.",
      precio: 54000,
      imagen: "img/productos/webcam-4k.jpg",
      cantidad: 1
    },
    {
      nombre: "Router Wi-Fi 6",
      descripcion: "Doble banda, 4 antenas, alta cobertura.",
      precio: 42000,
      imagen: "img/productos/router-wifi.jpg",
      cantidad: 1
    },
    {
      nombre: "Silla Gamer Ergonómica",
      descripcion: "Cuero sintético, reclinable 180°, almohadillas lumbares.",
      precio: 280000,
      imagen: "img/productos/silla-gamer.jpg",
      cantidad: 1
    },
    {
      nombre: "Microfono Condensador",
      descripcion: "Ideal para streaming y podcast, conexión USB.",
      precio: 68000,
      imagen: "img/productos/microfono.jpg",
      cantidad: 1
    },
    {
      nombre: "Memoria RAM 8GB DDR4",
      descripcion: "3200MHz, disipador de calor integrado.",
      precio: 32000,
      imagen: "img/productos/ram-8gb.jpg",
      cantidad: 1
    },
    {
      nombre: "Placa de Video RTX 4070",
      descripcion: "12GB GDDR6X, trazado de rayos, DLSS 3.",
      precio: 850000,
      imagen: "img/productos/placa-video.jpg",
      cantidad: 1
    },
    {
      nombre: "Fuente de Poder 750W",
      descripcion: "Certificación 80 Plus Gold, modular.",
      precio: 110000,
      imagen: "img/productos/fuente-750.jpg",
      cantidad: 1
    },
    {
      nombre: "Joystick Inalámbrico",
      descripcion: "Compatible con PC y Consolas, vibración HD.",
      precio: 55000,
      imagen: "img/productos/joystick.jpg",
      cantidad: 1
    },
    {
      nombre: "SSD M.2 NVMe 1TB",
      descripcion: "Lectura 3500MB/s, ideal para arranque rápido.",
      precio: 98000,
      imagen: "img/productos/ssd-1tb.jpg",
      cantidad: 1
    },
    {
      nombre: "Cargador Portátil 20000mAh",
      descripcion: "Carga rápida, 2 puertos USB, indicador LED.",
      precio: 35000,
      imagen: "img/productos/powerbank.jpg",
      cantidad: 1
    },
    {
      nombre: "Hub USB 4 puertos",
      descripcion: "USB 3.0, diseño compacto, plug and play.",
      precio: 15000,
      imagen: "img/productos/hub-usb.jpg",
      cantidad: 1
    },
    {
      nombre: "Soporte para Monitor",
      descripcion: "Brazo hidráulico, giro 360°, soporte VESA.",
      precio: 48000,
      imagen: "img/productos/soporte-monitor.jpg",
      cantidad: 1
    },
    {
      nombre: "Kit de Limpieza Tech",
      descripcion: "Para pantallas y teclados, incluye paño microfibra.",
      precio: 8500,
      imagen: "img/productos/kit-limpieza.jpg",
      cantidad: 1
    }
  ];

  get carrito() {
    return this.carritoService.getCarrito();
  }

  agregar(producto: Producto) {
    this.carritoService.agregarProducto(producto);
  }

  quitar(producto: Producto) {
    this.carritoService.quitarProducto(producto);
  }

  eliminar(producto: Producto){
    this.carritoService.eliminarProducto(producto);
  }
  total() {
    return this.carritoService.obtenerTotal();
  }

  finalizarCompra() {
    if (this.carrito.length > 0) {
      alert('Su compra fue realizada con Exito \nEl total es: $' + this.total());
      console.log('Compra realizada, el total es: $' + this.total());
      this.carritoService.limpiarCarrito();
    }
  }
}