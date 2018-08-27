import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map" ;
import {ContactService} from "../../services/contacts";
import {Router} from "@angular/router";
import {Contact} from "../../model/model.contact";
@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  pageConatcts:any ;
  motCle:string="";
  page:number=0 ;
  size:number=4 ;
  pages:Array<number>;

  constructor(public http:Http,
              public contactervice:ContactService,
              public  router: Router) {

  }

  ngOnInit() {

  }

  doSearch(){
    this.contactervice.getContacts(this.motCle,this.page, this.size)
      .subscribe(data=>{
        this.pageConatcts=data ;
        this.pages = new Array(data.totalPages);
      },err=>{
        console.log(err) ;
      })
  }


  chercher(){
    this.doSearch();
  }

  gotoPage(i:number){
    this.page=i ;
    this.doSearch();
  }


  onEditContact(id:number){
    this.router.navigate(['editContact',id]) ;
  }


  OnDelete(c:Contact){
    let confirm = window.confirm('voulez-vous vraiment supprimer') ;
      if(confirm){
          this.contactervice.SuppContact(c.id)
              .subscribe(data=>{
                  this.pageConatcts.content.splice(this.pageConatcts.content.indexOf(c),1);
              },err=>{

                  console.log(err) ;
              })
      }

  }
}
