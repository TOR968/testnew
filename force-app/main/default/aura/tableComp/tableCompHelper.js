({
    getData: function (cmp) {
        var action = cmp.get("c.getAccounts");
        var industry = cmp.get("v.childValue");
        action.setParams({ industryValue: industry });
        action.setCallback(
            this,
            $A.getCallback(function (response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    cmp.set("v.mydata", response.getReturnValue());
                } else if (state === "ERROR") {
                    var errors = response.getError();
                    // eslint-disable-next-line no-console
                    console.error(errors);
                }
            })
        );
        $A.enqueueAction(action);
    }
});
