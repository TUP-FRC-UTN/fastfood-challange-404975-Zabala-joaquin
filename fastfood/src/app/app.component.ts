import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PosComponent } from "./pos/pos.component";
import { KitchenComponent } from "./kitchen/kitchen.component";
import { DeliverComponent } from "./deliver/deliver.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PosComponent, KitchenComponent, DeliverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fastfood';
}
