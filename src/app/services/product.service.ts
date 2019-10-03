import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.httpService.get<Product[]>('assets/products.json')
      .pipe(map(data => data.map(data => new Product().deserialize(data)))
      );
  }
}
