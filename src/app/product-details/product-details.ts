import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../product/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {

  route = inject(ActivatedRoute);
  private httpClient = inject(HttpClient);
  product = signal<ProductModel>({id: 0, title: '', description: '', price: 0, image: '', category: ''});


  ngOnInit() {

    this.route.params.subscribe((params) => {

      this.httpClient.get<ProductModel>(`https://fakestoreapi.com/products/${params['id']}`)
      .subscribe({
        next: (product: ProductModel) => {
          this.product.set(product);
        },
        error: (error: unknown) => {
          console.error(error);
        },
        complete: () => {
          console.log('Product fetched successfully');
        },
      });
    });

  }
}
