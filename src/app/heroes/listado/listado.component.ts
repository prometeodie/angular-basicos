import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Iron Man', 'Hulk', 'Capitan america','Spider Man', 'Doctor strange'];
  heroeBorrado: string = '';
  borrarHeroe(){

  this.heroeBorrado = this.heroes.shift() || '' ;
  
  }

}
