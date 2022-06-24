import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  //styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[]= ['Spiderman', 'Ironman',' Hult', 'Thor'];
  heroeBorrado: string= '';
  borrado: boolean = false;



  borrarHeroe() {
    //console.log('borrando...');
   //const borrado = this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
   
  }
}
