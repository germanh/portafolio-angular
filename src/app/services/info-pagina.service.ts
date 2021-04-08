import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.service';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any;

  //equipo: any[] = [];  No funciona

  constructor( private http: HttpClient ) { 

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {

    // Leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;

        //console.log(this.info.email);
        //console.log(resp['email']);   // no funcionó

      });

  }

  private cargarEquipo(){

    this.http.get('https://angular-html-f291b-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( resp => {

      this.equipo = resp;
      //this.equipo = Array.of(resp)   no funciona

      console.log(this.equipo);
      
    });

  }


}
