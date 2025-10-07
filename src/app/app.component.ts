import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoComponent } from "./ingreso/ingreso.component";
import { EgresoComponent } from './egreso/egreso.component';

@Component({
  selector: 'app-root',
  imports: [CabeceroComponent, FormularioComponent, IngresoComponent, EgresoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-presupuesto';
}
