import { LightningElement, wire, track, api } from "lwc";
import getAccounts from "@salesforce/apex/AccController.getAccounts";

const columns = [
    { label: "Name", fieldName: "Name" },
    { label: "Billing State/Province", fieldName: "BillingState" },
    { label: "Phone", fieldName: "Phone", type: "phone" }
];
export default class ApexDatatableExample extends LightningElement {
    @track data = [];
    @track industryValue;
    @track columns = columns;
    @track tableLoadingState = true;

    @wire(getAccounts, { industryValue: "$handleValue" })
    accounts({ error, data }) {
        if (data) {
            this.data = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.data = undefined;
        }
        this.tableLoadingState = false;
    }
    handleValue = undefined;

    @api
    changeIndustry(value) {
        this.handleValue = value;
    }

    getSelections(event) {
        const selectedEvent = new CustomEvent("countselectedrows", {
            detail: event.detail.selectedRows.length
        });

        this.dispatchEvent(selectedEvent);
    }
}
