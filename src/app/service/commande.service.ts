import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private _url='http://127.0.0.1:8000/api/'

  constructor(private httpClient:HttpClient) { }
  addcommandes(produits:any){
    return this.httpClient.post(this._url+"addcommande",produits);

  }
  

}
