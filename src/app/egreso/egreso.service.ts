import { Injectable } from '@angular/core';
import { Egreso } from './egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  egresos : Egreso[] = [
    new Egreso('Renta Departamento', 900),
    new Egreso('Ropa', 200)
  ];

  eliminar(egreso: Egreso){
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }

  

}
