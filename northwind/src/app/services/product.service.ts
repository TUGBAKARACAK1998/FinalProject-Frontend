import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44338/api/products/getall";
  constructor(private HttpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
  return  this.HttpClient.get<ListResponseModel<Product>>(this.apiUrl);
    }
}
