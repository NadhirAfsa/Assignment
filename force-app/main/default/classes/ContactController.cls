public with sharing class ContactController {
    // Define an AuraEnabled method that retrieves contact records
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        // Perform a SOQL query to retrieve contact records
        return [SELECT Id, FirstName, LastName, Email, Phone FROM Contact];
    }
}