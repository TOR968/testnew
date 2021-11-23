({
    doInit: function (component, event, helper) {
        helper.getPicklistValues(component, event);
    },
    handleComponentEvent: function (component, event) {
        var valueFromChild = event.getParam("count");
        component.set("v.selectedRowsCount", valueFromChild);
    },
    sendValue: function (component) {
        var industry = component.get("v.acc.Industry");
        component.set("v.parentValue", industry);
    }
});
