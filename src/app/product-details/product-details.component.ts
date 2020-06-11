import { Component, OnInit } from '@angular/core';
/* Import ActivatedRoute from the @angular/router package, and the products array from ../products.  */
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
/* import cart services */
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

   product;
  /* Inject the cart service by adding it to the constructor() */
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

   addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  /* ngOnInit() method to subscribe route parameters and fetch the product based on the productId.

src/app/product-details/product-deta */
  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
}

}
