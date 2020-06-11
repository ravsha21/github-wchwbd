import { Injectable } from '@angular/core';
/* Import HttpClient from the @angular/common/http package.  */
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items = [];

constructor(
    private http: HttpClient
  ) {}
  
/*  addToCart() method appends a product to an array of items */
 addToCart(product) {
    this.items.push(product);
  }
/* getItems() method collects the items users add to the cart and returns each item with its associated quantity. */
  getItems() {
    return this.items;
  }
/* clearCart() method returns an empty array of items. */
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  
}