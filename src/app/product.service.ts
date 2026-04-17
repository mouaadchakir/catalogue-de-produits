import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: ProductModel[] = [
    { id: 1, name: 'Produit 1', description: 'Description 1', price: 100, image: 'https://picsum.photos/200/200?id=1' },
    { id: 2, name: 'Produit 2', description: 'Description 2', price: 200, image: 'https://picsum.photos/200/200?id=2' },
    { id: 3, name: 'Produit 3', description: 'Description 3', price: 300, image: 'https://picsum.photos/200/200?id=3' },
    { id: 4, name: 'Produit 4', description: 'Description 4', price: 400, image: 'https://picsum.photos/200/200?id=4' },
    { id: 5, name: 'Produit 5', description: 'Description 5', price: 500, image: 'https://picsum.photos/200/200?id=5' },
    { id: 6, name: 'Produit 6', description: 'Description 6', price: 600, image: 'https://picsum.photos/200/200?id=6' },
    { id: 7, name: 'Produit 7', description: 'Description 7', price: 700, image: 'https://picsum.photos/200/200?id=7' },
    { id: 8, name: 'Produit 8', description: 'Description 8', price: 800, image: 'https://picsum.photos/200/200?id=8' },
  ];

  getProducts(): ProductModel[] {
    return this.products;
  }
}
