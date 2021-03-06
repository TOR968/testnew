({
    init: function (cmp, event, helper) {
        cmp.set("v.mycolumns", [
            { label: "Contact Name", fieldName: "Name", type: "text" },
            { label: "Billing State/Province", fieldName: "BillingState", type: "text" },
            { label: "Phone", fieldName: "Phone", type: "phone" }
        ]);
        helper.getData(cmp);
    },
    updateSelectedText: function (cmp, event) {
        var selectedRows = event.getParam("selectedRows");
        var compEvent = cmp.getEvent("sampleComponentEvent");
        compEvent.setParams({ count: selectedRows.length });
        compEvent.fire();
    },
    itemsChange: function (cmp, evt, helper) {
        helper.getData(cmp);
    }
});
