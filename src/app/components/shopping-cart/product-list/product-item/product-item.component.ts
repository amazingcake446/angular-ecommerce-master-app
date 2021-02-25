import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartitemsService } from 'src/app/services/cartitems.service';
import { MessengerService } from 'src/app/services/messenger.service'; 

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Product 

  constructor(private msg: MessengerService, private cartService: CartitemsService) { }

  ngOnInit(): void {
  }


  // old method from messenger method 
 /*  handleAddToCart() {
    this.msg.sendMsg(this.productItem); 
  } */

  // add to cart event will fire the addToCart in CartService 
  handleAddToCart() {
    this.cartService.addToCart(this.productItem); 
   }
  
}
