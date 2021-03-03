import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Product } from 'src/app/models/product';
import { CartitemsService } from 'src/app/services/cartitems.service';
import { CartComponent } from 'src/app/components/shopping-cart/cart/cart.component'
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  increaseButtonDisabled: boolean = false;
  decreaseButtonDisabled: boolean = false;

  @Input() cartItem: any;
  
  constructor(private CartService: CartitemsService, private localStorage: LocalStorageService) { }

  ngOnInit(): void {
  }
  
  handleDeleteCartItem() {
    this.CartService.deleteCartItem(this.cartItem) 
   
  } 

  handleIncreaseQty() {
    this.CartService.increaseQty(this.cartItem)
  }

  handleDecreaseQty() {
    this.CartService.decreaseQty(this.cartItem)
  }

}
