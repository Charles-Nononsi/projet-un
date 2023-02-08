import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS } from '../mock-product';
import { Product } from '../product';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent  {
productList: Product[] = PRODUCTS;

constructor(private router: Router){}

goToProduct(product: Product){
    this.router.navigate(['/products',product.id]);
  }
}
