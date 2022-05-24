import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../component/products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url='http://127.0.0.1:8000/api/'

  constructor(private httpClient:HttpClient) {}

    
}
