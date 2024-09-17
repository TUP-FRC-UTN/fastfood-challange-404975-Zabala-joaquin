import { Injectable } from '@angular/core';
import { Pedido } from './models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoServiceService {

  constructor() { }

 pedidosList : Pedido[] = [];

 PedidosListos : Pedido[] = [];

 add(pedido:Pedido){
   this.pedidosList.push(pedido);
 }

 getPedidos(){
   return this.pedidosList;
 }  

 delete(index : number){
   this.pedidosList.splice(index, 1);
 }  

 getById(id : number){
   return this.pedidosList.filter( p  => p.number == id)[0];
 }

 /**
  * manejos de pedidos que estan terminados
  */

 addPedidoListo(pedido:Pedido){
   this.PedidosListos.push(pedido);
 }

 getPedidosListos(){
   return this.PedidosListos;
 }
}
