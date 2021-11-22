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
    //  getData: function (cmp) {
    //     var action = cmp.get("c.getAccounts");
    //     // var industry = cmp.get("v.acc.Industry");
    //     // action.setParams({ ind: industry });
    //     action.setCallback(
    //         this,
    //         $A.getCallback(function (response) {
    //             var state = response.getState();
    //             if (state === "SUCCESS") {
    //                 cmp.set("v.mydata", response.getReturnValue());
    //             } else if (state === "ERROR") {
    //                 var errors = response.getError();
    //                 // eslint-disable-next-line no-console
    //                 console.error(errors);
    //             }
    //         })
    //     );
    //     $A.enqueueAction(action);
    // }

    // // saveAcc: function (component) {
    // //     var acc = component.get("v.acc");
    // //     var action = component.get("c.createacc");
    // //     action.setParams({
    // //         accobj: acc
    // //     });
    // //     action.setCallback(this, function (response) {
    // //         var state = response.getState();
    // //         if (state === "SUCCESS") {
    // //             alert("Record Created Successfully!!");
    // //         } else if (state === "ERROR") {
    // //             var errors = action.getError();
    // //             if (errors) {
    // //                 if (errors[0] && errors[0].message) {
    // //                     alert(errors[0].message);
    // //                 }
    // //             }
    // //         }
    // //     });
    // //     $A.enqueueAction(action);
    // // }
});
