import { Component, OnInit } from '@angular/core';
/* Import the FormBuilder service from the @angular/forms package */
import { FormBuilder } from '@angular/forms';
/* Import the CartService from the cart.service.ts file. */
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }
/* Recall getItems() method to Set the items using the cart service's .  */
  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}