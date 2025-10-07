import { Component, Input } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egreso',
  imports: [CommonModule],
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css'
})
export class EgresoComponent {
  egresos: Egreso[] = [];
  @Input() ingresoTotal!: number;

  constructor(private egresoServicio: EgresoService) {
    this.egresos = egresoServicio.egresos;
  }

  eliminarEgreso(egreso: Egreso) {
    this.egresoServicio.eliminar(egreso);
  }

  getPorcentajeTotal(egreso: Egreso): number {
    return egreso.valor / this.ingresoTotal;
  }
}
