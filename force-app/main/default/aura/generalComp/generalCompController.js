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
        // eslint-disable-next-line no-console
        console.log("🚀 ~ file: generalCompController.js ~ line 11 ~ industry", industry);
        component.set("v.parentValue", industry);
    }
});
