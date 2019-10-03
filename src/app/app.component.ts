import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title: string;
  public product: Product;
  public products: Product[];
  public cart:Product[];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ){
    this.title = 'Últimos Produtos';
    this.getProducts();
  }
  
  public getProducts(){
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  public addToCart(product: Product){
    try {
      this.cartService.add(product);
      alert('O produto ' + product.name + ' foi adicionado com sucesso.');
    } catch (error) {
      alert('O produto ' + product.name + ' não pode ser adicionado.');
      console.error(error);
    }
  }

  public removeFromCart(product: Product){
    this.cartService.remove(product);
  }

  public openCart(){
    this.cart = this.cartService.getCart();
    //$('#cartModal').modal('show');
  }

  public closeCart(){
    this.cart = [];
    //$('#cartModal').modal('dispose');
  }

  public getTotal(): number {
    return this.cartService.calculateTotalPrice()
  }
}
