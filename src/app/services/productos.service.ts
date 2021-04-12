import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //productos: Producto = {};
  //productos: Producto[] = [];
  
  productos : any;
  cargando = true;

  constructor( private http: HttpClient ) { 

    this.cargarProductos();

  }

  private cargarProductos() {

    this.http.get('https://angular-html-f291b-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (resp) => {

      this.productos = resp;
      this.cargando = false;

      // para probar el Loading
      //setTimeout( ()=> {
      //  this.cargando = false;
      //},2000);
     
     // console.log(this.productos);
      
    });

  }

  getProducto( id: string) {
    return this.http.get(`https://angular-html-f291b-default-rtdb.firebaseio.com/productos/${ id }.json`)
  }


}
