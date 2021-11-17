public with sharing class AccountController {
    @AuraEnabled
    public static List<Account> getAccounts() {
        List<Account> accounts = [SELECT Id, Name, Industry, BillingState, Phone FROM Account];
        return accounts;
    }
}
