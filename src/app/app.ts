import { Component } from '@angular/core';
import { ProductTableComponent } from './product-table.component';

@Component({
  selector: 'app-root',
  imports: [ProductTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
