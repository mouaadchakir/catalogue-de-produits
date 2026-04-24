import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductModel } from '../product/product.model';
import { Product } from "../product/product";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  imports: [Product],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {


  products = signal<ProductModel[]>([]);
  private httpClient = inject(HttpClient);
  
  constructor() {
    
  }
  
  ngOnInit() {
    this.httpClient.get<ProductModel[]>('https://fakestoreapi.com/products')
    .subscribe({
      next: (data) => {
        this.products.set(data);
      } ,
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Products fetched successfully');
      },
    });
  }
  



}
