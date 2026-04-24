import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from "./product/product";
import { ProductList } from "./product-list/product-list";
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Product, ProductList, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  
}
