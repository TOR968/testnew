({
    getPicklistValues: function (component) {
        var action = component.get("c.getIndustry");
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                var fieldMap = [];
                // eslint-disable-next-line guard-for-in
                for (var key in result) {
                    fieldMap.push({ key: key, value: result[key] });
                }
                component.set("v.fieldMap", fieldMap);
            }
        });
        $A.enqueueAction(action);
    }
});
