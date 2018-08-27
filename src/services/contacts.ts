
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Contact} from "../model/model.contact";
@Injectable()
export class ContactService{

  constructor(public http:Http){

  }

  getContacts(motCle:string, page:number, size:number){
      return this.http.get("http://localhost:8080/chercherC?motCle="
      +motCle+"&size="+size+"&page="+page)
      .map(resp=>resp.json());
  }

  getContact(id:number){
    return this.http.get("http://192.168.1.3:8080/contacts/"+id)
      .map(resp=>resp.json());
  }
  saveContact(contact:Contact){
    return this.http.post("http://localhost:8080/ajouterC", contact)
      .map(resp=>resp.json());
  }

  updateContact(contact:Contact){
    return this.http.put("http://192.168.1.3:8080/updateC/"+contact.id, contact)
      .map(resp=>resp.json());
  }

  SuppContact(id:number){
    return this.http.delete("http://192.168.1.3:8080/effacerC/"+id)
      .map(resp=>resp.json());
  }

}
