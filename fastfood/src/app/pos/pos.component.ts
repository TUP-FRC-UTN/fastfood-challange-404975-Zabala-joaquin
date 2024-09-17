import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Pedido } from '../models/pedido';
import { PedidoServiceService } from '../pedido-service.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {

pedido =  new Pedido();
pedidioService = inject(PedidoServiceService);


/**
 * 
 * este metodo se ejecuta cuando el formulario es enviado
 */
onSubmitFormulario(form: NgForm) {
 if(form.valid){
    console.log(this.pedido);
    this.pedidioService.add(this.pedido);
    this.pedido = new Pedido();
  }
}


}
