import {Component, OnInit} from '@angular/core';
import {Contact} from "../../model/model.contact";
import {ContactService} from "../../services/contacts";

@Component({
    selector: 'app-new-contact',
    templateUrl: './new-contact.component.html',
    styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

    contact: Contact = new Contact();
    mode: number = 1;

    constructor(public contactService: ContactService) {

    }

    ngOnInit() {

    }

    saveContact() {
        this.contactService.saveContact(this.contact)
            .subscribe(data => {
                this.contact = data;
                this.mode = 2;
            }, err => {
                console.log(err);
            })
    }

}
