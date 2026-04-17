import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-table',
  standalone: true,
  templateUrl: './product-table.component.html',
})
export class ProductTableComponent implements OnInit {
  productsList: ProductModel[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productsList = [...this.productService.getProducts()];
  }

  deleteProduct(id: number): void {
    this.productsList = this.productsList.filter((product) => product.id !== id);
  }

  editProduct(id: number): void {
    const productIndex = this.productsList.findIndex((product) => product.id === id);
    if (productIndex === -1) {
      return;
    }

    const currentProduct = this.productsList[productIndex];
    const updatedName = window.prompt('Nouveau nom :', currentProduct.name);
    if (updatedName === null) {
      return;
    }

    const updatedDescription = window.prompt('Nouvelle description :', currentProduct.description);
    if (updatedDescription === null) {
      return;
    }

    const updatedPriceInput = window.prompt('Nouveau prix :', String(currentProduct.price));
    if (updatedPriceInput === null) {
      return;
    }

    const updatedPrice = Number(updatedPriceInput);
    if (Number.isNaN(updatedPrice)) {
      window.alert('Prix invalide');
      return;
    }

    const updatedImage = window.prompt('Nouvelle URL image :', currentProduct.image);
    if (updatedImage === null) {
      return;
    }

    this.productsList[productIndex] = {
      ...currentProduct,
      name: updatedName.trim() || currentProduct.name,
      description: updatedDescription.trim() || currentProduct.description,
      price: updatedPrice,
      image: updatedImage.trim() || currentProduct.image,
    };
    this.productsList = [...this.productsList];
  }
}
