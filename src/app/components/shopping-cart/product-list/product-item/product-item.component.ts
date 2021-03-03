import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartitemsService } from 'src/app/services/cartitems.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Product 

  constructor(private cartService: CartitemsService, private localStorage: LocalStorageService) { }

  ngOnInit(): void {
  }


  // add to cart event will fire the addToCart in CartService 
  handleAddToCart() {
    /* this.cartService.addServiceApiCall(this.productItem).subscribe(() => { */
      this.cartService.addToCart(this.productItem);
    /*   this.localStorage.setItem('cart',JSON.stringify(this.productItem)) */
    /* }) */
  }
  
}
