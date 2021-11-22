import { LightningElement, wire, track } from "lwc";
import { getPicklistValues, getObjectInfo } from "lightning/uiObjectInfoApi";
import INDUSTRY from "@salesforce/schema/Account.Industry";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

export default class PicklistDemo extends LightningElement {
    @track pickListvalues;
    @track error;
    @track values;
    @track count = 0;

    @wire(getPicklistValues, {
        recordTypeId: "012000000000000AAA",
        fieldApiName: INDUSTRY
    })
    wiredPickListValue({ data, error }) {
        if (data) {
            this.pickListvalues = data.values;
            this.error = undefined;
        }
        if (error) {
            this.error = error;
            this.pickListvalues = undefined;
        }
    }

    @wire(getObjectInfo, {
        objectApiName: ACCOUNT_OBJECT
    })
    wiredObject({ data, error }) {
        if (data) {
            console.table(data);
            this.error = undefined;
        }
        if (error) {
            console.log(error);
            this.error = error;
        }
    }

    handleChange(data) {
        this.template.querySelector("c-table-l-w-c").changeIndustry(data.detail.value);
    }

    hanldeCount(event) {
        this.count = event.detail;
    }
}
