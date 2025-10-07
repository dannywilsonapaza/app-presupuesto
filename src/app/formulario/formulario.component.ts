import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-formulario',
  imports: [CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  tipo: string = 'ingresoOperacion';

  tipoOperacion(evento : Event) {
    const elementoSelect = evento.target as HTMLSelectElement;
    this.tipo = elementoSelect.value;
  }
}
