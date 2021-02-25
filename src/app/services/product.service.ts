import { Injectable } from '@angular/core';
import {Product} from 'src/app/models/product'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1,'product 1', 'really cool', 100),
    new Product(2,'product 2', 'really cool', 100),
    new Product(3,'product 3', 'really cool', 100),
    new Product(4,'product 4', 'really cool', 100),
    new Product(5,'product 5', 'really cool', 100),
    new Product(6,'product 6', 'really cool', 100),
    new Product(7,'product 7', 'really cool', 100),
     

  ]; 

  constructor() { }

  getProducts(): Product[] {
  // TODO: Populate products from an API and return an Observable
    return this.products; 
  }
}
