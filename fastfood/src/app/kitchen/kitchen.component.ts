import { Component, inject } from '@angular/core';
import { PedidoServiceService } from '../pedido-service.service';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  PedidosService = inject(PedidoServiceService);

  pedidosPedientes = this.PedidosService.getPedidos();
  PedidosEnCoccion? : Pedido | undefined ;


  agregarPedidoEnCoccion(idPedido: number) {

    this.PedidosEnCoccion = this.PedidosService.getById(idPedido);

    // aca busco el indice de ese pedido y lo borro de la lista de pedidos pendientes
    const index = this.pedidosPedientes.findIndex(p =>p.number == idPedido);
    this.PedidosService.delete(index);
  
    // Actualiza la lista de pendientes para reflejar el cambio
    this.pedidosPedientes = this.PedidosService.getPedidos();  

    console.log(this.PedidosEnCoccion);
  }

  agregarAPedidoListo() {
    
    if(this.PedidosEnCoccion){
      this.PedidosService.addPedidoListo(this.PedidosEnCoccion!);  
      this.PedidosEnCoccion = undefined;

    }else{
      alert('No hay pedidos en cocción');
    }
    
  }
}
