({
    init: function (cmp, event, helper) {
        cmp.set("v.mycolumns", [
            { label: "Contact Name", fieldName: "Name", type: "text" },
            { label: "Billing State/Province", fieldName: "BillingState", type: "text" },
            { label: "Phone", fieldName: "Phone", type: "phone" }
        ]);
        helper.getData(cmp);
    }
});
