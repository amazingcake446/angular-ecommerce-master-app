import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Product } from 'src/app/models/product';
import { CartitemsService } from 'src/app/services/cartitems.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  increaseButtonDisabled: boolean = false;
  decreaseButtonDisabled: boolean = false;

  @Input() cartItem: any;

  constructor(private CartService: CartitemsService) { }

  ngOnInit(): void {
    console.log(this.cartItem);

  }

  handleDeleteCartItem() {
    console.log('delete item')
    let cartItemIndex = this.CartService.cartItems.indexOf(this.cartItem);
    this.CartService.cartItems.splice(cartItemIndex, 1);
  }

  increaseQty() {
    console.log('Increased qty');
    let cartItemIndex = this.CartService.cartItems.indexOf(this.cartItem);
    this.CartService.cartItems[cartItemIndex].qty++;
  }
  decreaseQty() {
    console.log('decrease qty');
    let cartItemIndex = this.CartService.cartItems.indexOf(this.cartItem);
    if( this.CartService.cartItems[cartItemIndex].qty > 1) {
      this.CartService.cartItems[cartItemIndex].qty--;

    }


  }

}
