import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from '../component/products/products';
import { Commentaire } from '../models/commentaire';
import { DataService } from '../service/data.service';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public quantite=new FormControl('1',Validators.required);

  public product=<IProducts>{};
  public comment=<Commentaire>{};
  public commentaire=new FormControl('',Validators.required);
  public id_client=new FormControl('',Validators.required);
  public id_produit=new FormControl('',Validators.required);

  id:any;
  data:any;
  public c = []  as any;
  products: Array<object> = [];
  constructor(private activatedRoute: ActivatedRoute,private dataService: DataService,private panier:PanierService,private router: Router) { }

  
  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];

    this.getProduct();
    this.addComment();
    this.getComments();
  }

  getProduct(){
    this.dataService.ProductById(this.id).subscribe(res => { this.data = res; return this.product = this.data})
  }

  addComment(){
    this.dataService.AddDataComment(this.comment,this.id).subscribe(res => { return console.log(res)})
  }

  getComments(){
    this.dataService.GetDataComments(this.id).subscribe(res => {  this.c = res;})
  }

  
  _addItemToCart( id:any): void {
    let payload = {
      productId: id,
      quantity:this.quantite.value,
      id_client:localStorage.getItem('id'),
    };
    this.panier.addToCart(payload).subscribe(() => {
      
      alert('Product Added');
      this.router.navigateByUrl('/panier')


    });
}}
