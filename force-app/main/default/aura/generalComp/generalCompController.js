({
    doInit: function (component, event, helper) {
        helper.getPicklistValues(component, event);
    },

    // eslint-disable-next-line no-unused-vars
    // handleOnChange: function (component, event, helper) {
    //     var industry = component.get("v.acc.Industry");
    //     // helper.getData(component, event);
    //     // eslint-disable-next-line no-alert
    //     alert(industry);
    // },
    handleComponentEvent: function (component, event) {
        var valueFromChild = event.getParam("count");
        component.set("v.selectedRowsCount", valueFromChild);
    }
});
