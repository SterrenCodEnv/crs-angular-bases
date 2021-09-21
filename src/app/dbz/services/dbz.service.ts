import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

  private _personajes: Personaje[] = [{
    nombre: 'Goku',
    poder: 15000
  },{
    nombre: 'Vegata',
    poder: 9500
  }];

  get personajes(){
    //! Buena practica... Spread
    return [...this._personajes];
  }

  constructor(){}

  agregarPersonaje(p: Personaje){
    this._personajes.push(p);
  }

  eliminarPersonaje(nombre: string){
    this._personajes = this._personajes.filter( x => x.nombre != nombre);
   }
}

