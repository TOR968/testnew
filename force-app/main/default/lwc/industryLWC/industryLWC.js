import { LightningElement, wire, track } from "lwc";
import { getPicklistValues, getObjectInfo } from "lightning/uiObjectInfoApi";
import getAccounts from "@salesforce/apex/AccController.getAccounts";
import INDUSTRY from "@salesforce/schema/Account.Industry";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

export default class PicklistDemo extends LightningElement {
    @track pickListvalues;
    @track error;
    @track values;
    @track industryValue;

    @wire(getPicklistValues, {
        recordTypeId: "012000000000000AAA",
        fieldApiName: INDUSTRY
    })
    wiredPickListValue({ data, error }) {
        if (data) {
            // console.log(` Picklist values are `, data.values);
            this.pickListvalues = data.values;
            this.error = undefined;
        }
        if (error) {
            // console.log(` Error while fetching Picklist values  ${error}`);
            this.error = error;
            this.pickListvalues = undefined;
        }
    }

    @wire(getObjectInfo, {
        objectApiName: ACCOUNT_OBJECT
    })
    wiredObject({ data, error }) {
        if (data) {
            // console.log(" Object iformation ", data.values);
            console.table(data);
        }
        if (error) {
            console.log(error);
        }
    }

    @wire(getAccounts, { industryValue: "$handleValue" })
    accounts({ error, data }) {
        if (data) {
            this.data = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.data = undefined;
        }
    }
    handleValue = undefined;

    handleChange(data) {
        console.log(
            "🚀 ~ file: IndustryLWC.js ~ line 43 ~ PicklistDemo ~ handleChange ~ handleChange",
            data.detail.value
        );
        this.handleValue = data.detail.value;
    }
}
