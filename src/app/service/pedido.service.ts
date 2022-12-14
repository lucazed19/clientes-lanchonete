import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pedido } from '../class/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidosURL="https://lanchonete-funtec-api.herokuapp.com/pedidos";

  constructor(private http:HttpClient) { }

  criar(pedido:Pedido):Observable<Object>{
    return this.http.post(`${this.pedidosURL}`, pedido);
  }
}
