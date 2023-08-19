import { LightningElement,wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

// Define columns for the lightning-datatable
const COLUMNS = [
    { label: 'First Name', fieldName: 'FirstName', type: 'text' },
    { label: 'Last Name', fieldName: 'LastName', type: 'text' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' }
];

export default class ContactList extends LightningElement {
    // Initialize columns using the defined COLUMNS constant
    columns = COLUMNS;
    // Initialize contacts as an empty array
    contacts = [];
    // Wire the getContacts() method to automatically fetch data
    @wire(getContacts)
    wiredContacts({ error, data }) {
        // If data is available, update the contacts array
        if (data) {
            this.contacts = data;
        } else if (error) {
        // If there's an error, log it to the console
            console.error(error);
        }
    }
}