({
    // handleSelect: function (component, event, helper) {
    //     var stepName = event.getParam("detail").value;
    //     var toastEvent = $A.get("e.force:showToast");
    //     toastEvent.setParams({
    //         title: "Success!",
    //         message: "Toast from " + stepName
    //     });
    //     toastEvent.fire();
    // }
    onChange: function (cmp, evt, helper) {
        alert(cmp.find("select").get("v.value") + " pie is good.");
    }
});
