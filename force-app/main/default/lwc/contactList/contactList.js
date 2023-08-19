import { LightningElement,wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';


const COLUMNS = [
    { label: 'First Name', fieldName: 'FirstName', type: 'text' },
    { label: 'Last Name', fieldName: 'LastName', type: 'text' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' }
];

export default class ContactList extends LightningElement {

    columns = COLUMNS;
    contacts = [];

    @wire(getContacts)
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
        } else if (error) {
            console.error(error);
        }
    }
}