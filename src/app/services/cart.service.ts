import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: Product[] = [];

  constructor() {
    this.load();
  }

  load() {
    if (localStorage.getItem('cart') !== null) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }
  }

  save(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  add(item: Product): void {
    this.cart.push(item);
    this.save();
  }

  remove(item: Product): void {
    const itemIndex = this.cart.indexOf(item);
    if (itemIndex > -1) {
      this.cart.splice(itemIndex, 1);
      this.save();
    }
  }

  removeByIndex(index: number): void {
    this.cart.splice(index, 1);
    this.save();
  }

  calculateTotalPrice(): number {
    return this.cart.reduce((currentValue, item) => item.Value + currentValue, 0);
  }

  getCart(): Array<Product> {
    return this.cart;
  }
}
