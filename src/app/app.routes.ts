import { Routes } from "@angular/router";
import { App } from "./app";
import { ProductList } from "./product-list/product-list";
import { ProductDetails } from "./product-details/product-details";

const routes: Routes = [
    {
        path: '',
        component: ProductList,
    },
    {
        path: 'product-details/:id',
        component: ProductDetails,
    },
];

export { routes };