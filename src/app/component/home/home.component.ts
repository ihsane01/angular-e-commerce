import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public categorylist :any
  public products= []  as any;


  constructor(private dataservices: DataService,private router: Router) { }

  ngOnInit(): void {
    // this.dataservices.findAllCategory().subscribe(data =>{
    //   this.categorie=data ;
    // },
    // error=>{
    //   console.log(error);
    // })
    this.dataservices.findAllCategory().subscribe(data => {
      this.categorylist = data;
  })
  // getProductcat(id:any){
     
  //   this.dataservices.listebycat(id).subscribe(response=>this.products=response)
  //   this.router.navigateByUrl('Productsbycategories')

  //   }
  }
}
