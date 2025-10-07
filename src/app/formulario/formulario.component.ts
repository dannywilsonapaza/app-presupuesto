import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  tipo: string = 'ingresoOperacion';

  //Defininimos los input del formulario

  descripcionInput: string = '';
  valorInput: number = 0;

  constructor(
    private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService
  ) {}
  tipoOperacion(evento: Event) {
    const elementoSelect = evento.target as HTMLSelectElement;
    this.tipo = elementoSelect.value;
  }

  agregarvalor() {
    if (this.descripcionInput !== '' && this.valorInput > 0) {
      if (this.tipo === 'ingresoOperacion') {
        this.ingresoServicio.ingresos.push(
          new Ingreso(this.descripcionInput, this.valorInput)
        );
      }
      else {
        this.egresoServicio.egresos.push(
          new Ingreso(this.descripcionInput, this.valorInput)
        );
      }

    }
     else {
        console.log("Formulario no válido");
      }

      //Limpiar el formulario
      this.descripcionInput = '';
      this.valorInput = 0;
  }
}
