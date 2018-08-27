import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../services/contacts";

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactService: ContactService) {


  }

  ngOnInit() {
  }

  AddContact() {

  }

  onSaveConatct(dataForm) {

    this.contactService.saveContact(dataForm)
      .subscribe(
        data => {
          console.log(data);

        }, err => {
          console.log(JSON.parse(err._body).message);
        }
      )
  }
}
