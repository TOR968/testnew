public with sharing class AccController {
    @AuraEnabled(cacheable=true)
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
}
