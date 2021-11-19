import { LightningElement, wire } from "lwc";
import getAccounts from "@salesforce/apex/AccController.getAccounts";

const columns = [
    { label: "Name", fieldName: "Name" },
    { label: "Billing State/Province", fieldName: "BillingState" },
    { label: "Phone", fieldName: "Phone", type: "phone" }
];
export default class ApexDatatableExample extends LightningElement {
    error;
    columns = columns;

    @wire(getAccounts)
    accounts;
}
