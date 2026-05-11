import { Routes } from '@angular/router';
import { SlideEventos } from './components/slide-eventos/slide-eventos';
import { ProductosCarrito } from './components/productos-carrito/productos-carrito';
import { JuegoMemoria } from './components/juego-memoria/juego-memoria';
import { InscripcionesComponent} from './components/inscripciones/inscripciones';
import { Home } from './components/home/home';

export const routes: Routes = [
    {path: 'slide-eventos', component: SlideEventos},
    {path: 'productos', component: ProductosCarrito},
    {path: 'juego-memoria', component: JuegoMemoria},
    {path: 'inscripciones', component: InscripcionesComponent},
    {path: 'home', component: Home},
    {path: '',redirectTo: '/home', pathMatch: 'full'}
];
