({
    doInit: function (component, event, helper) {
        helper.getPicklistValues(component, event);
    },

    handleOnChange: function (component, event, helper) {
        // var industry = component.get("v.acc.Industry");
        helper.getData(component, event);
        // eslint-disable-next-line no-alert
        // alert(industry);
    }
});
