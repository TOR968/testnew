public with sharing class AccController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String industryValue) {
        String key = '%' + industryValue + '%';
        List<Account> accounts = [SELECT Id, Name, Industry, BillingState, Phone FROM Account WHERE Industry = :key];
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
        System.debug('sss ' + options);
        return options;
    }
}
