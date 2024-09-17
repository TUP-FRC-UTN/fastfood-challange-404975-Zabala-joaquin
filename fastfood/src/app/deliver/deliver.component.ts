import { Component, inject } from '@angular/core';
import { PedidoServiceService } from '../pedido-service.service';
import { Pedido } from '../models/pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deliver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deliver.component.html',
  styleUrl: './deliver.component.css'
})
export class DeliverComponent {

  pedidosService = inject(PedidoServiceService);

  pedidosListos?: Pedido[] = this.pedidosService.getPedidosListos();;

  ngOnInit(): void {
    //this.pedidosListos = this.pedidosService.getPedidosListos();
    console.log(this.pedidosListos);
  }

  EntregarPedido(id: number) {
    this.pedidosListos?.splice(id, 1);
  }
    

}
