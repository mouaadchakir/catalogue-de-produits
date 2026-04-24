import { Component, input, signal } from '@angular/core';
import { ProductModel } from './product.model';
import { CurrencyPipe ,SlicePipe} from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, SlicePipe, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  product = input.required<ProductModel>();



}
