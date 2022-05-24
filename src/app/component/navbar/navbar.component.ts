import { Component, Input, OnInit } from '@angular/core';
import { commande } from 'src/app/models/commande.model';
import { DataService } from 'src/app/service/data.service';
import { LoginComponent } from 'src/app/signup/login/login.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public commandesliste= []  as any;

  constructor(private dataservice:DataService){}

  ngOnInit(): void {
   
  }



  
  islogin():boolean{
   if( this.dataservice.loggedIn()){
     return true;
   }
   else{
   return false;
  }
}
logout(){
  this.dataservice.logoutUser();

}

}
