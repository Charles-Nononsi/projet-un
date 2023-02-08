import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCTS } from '../mock-product';
import { Product } from '../product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

productList: Product[];
product: Product|undefined;

constructor(private route: ActivatedRoute, private router: Router){ }

      ngOnInit(){
      this.productList = PRODUCTS;
      const productId: string|null = this.route.snapshot.paramMap.get('id');
      if(productId){
      this.product = this.productList.find(product => product.id == +productId)
      }

      }

      goToProductList(){
      this.router.navigate(['/products']);
      }
}
