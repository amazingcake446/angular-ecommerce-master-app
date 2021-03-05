import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  
  productList: Product[] = []; 
  wishlist: number[] = []



  constructor(
    private http: HttpClient,
    private wishlistService: WishlistService,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.loadWishlist(); 
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products
      
    })
  }

  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(productIds => {
      console.log(productIds)
      this.wishlist = productIds;
    })
  }
}
