public with sharing class AccountController {
    @AuraEnabled
    public static List<Account> getAccounts() {
        List<Account> accounts = [SELECT Id, Name, Industry, BillingState, Phone FROM Account];
        System.debug('acc ' + accounts);
        return accounts;
    }

    @AuraEnabled
    public static Map<String, String> getIndustry() {
        Map<String, String> options = new Map<String, String>();

        Schema.DescribeFieldResult fieldResult = Account.Industry.getDescribe();

        List<Schema.PicklistEntry> pValues = fieldResult.getPicklistValues();
        for (Schema.PicklistEntry p : pValues) {
            options.put(p.getValue(), p.getLabel());
        }
        return options;
    }
}
