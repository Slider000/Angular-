import { Component } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent{
  
  mostrar = true;

  frase: any = {
    mensaje: 'Piratea el planeta',
    autor: 'Cerocool'
  };

  personajes: string[] = ['cerocool', 'cereeal', 'electra'];

}