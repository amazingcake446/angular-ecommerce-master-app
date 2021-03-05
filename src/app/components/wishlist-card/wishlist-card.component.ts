import { Component, Input, OnInit } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';
import { Product } from 'src/app/models/product';
import { CartitemsService } from 'src/app/services/cartitems.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { WishlistComponent } from '../wishlist/wishlist.component';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.scss']
})
export class WishlistCardComponent implements OnInit {

  
  @Input() productItem!: Product 

  @Input() addedToWishlist: boolean; 

  constructor(
    private cartService: CartitemsService, 
    private localStorage: LocalStorageService,
    private wishListService: WishlistService
    ) { }

  ngOnInit(): void {
  }


  // add to cart event will fire the addToCart in CartService 
  handleAddToCart() {
   
      this.cartService.addToCart(this.productItem);
     
  }

  handleAddToWishlist(){
    this.wishListService.addToWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = true; 
    })
  }

  handleRemoveFromWishlist(){
    this.wishListService.removeFromWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = false; 
    })
  }
}
