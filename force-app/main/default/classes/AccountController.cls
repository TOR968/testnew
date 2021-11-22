public with sharing class AccountController {
    @AuraEnabled
    public static List<Account> getAccounts(String industryValue) {
        List<Account> accounts = [
            SELECT Id, Name, Industry, BillingState, Phone
            FROM Account
            WHERE Industry = :industryValue
            WITH SECURITY_ENFORCED
        ];
        System.debug('acc ' + accounts);
        System.debug('industryValue ' + industryValue);
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
