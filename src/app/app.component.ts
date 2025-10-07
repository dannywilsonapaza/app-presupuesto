import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoComponent } from "./ingreso/ingreso.component";
import { EgresoComponent } from './egreso/egreso.component';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { EgresoService } from './egreso/egreso.service';
import { IngresoService } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CabeceroComponent, FormularioComponent, IngresoComponent, EgresoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ) {
    this.ingresos = this.ingresoService.ingresos;
    this.egresos = this.egresoService.egresos;
    }

    getIngresoTotal() {
      let ingresoTotal: number = 0;
      this.ingresos.forEach(ingreso => {
        ingresoTotal += ingreso.valor;
      });
      return ingresoTotal;
      }

    getEgresoTotal() {
      let egresoTotal: number = 0;
      this.egresos.forEach(egreso => {
        egresoTotal += egreso.valor;
      });
      return egresoTotal;
    }

    getPorcentajeTotal() {
      return this.getEgresoTotal() / this.getIngresoTotal();
    }

    getPresupuestoTotal() {
      return this.getIngresoTotal() - this.getEgresoTotal();
    }
}
