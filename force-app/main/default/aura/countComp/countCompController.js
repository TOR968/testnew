({
    updateSelectedText: function (cmp, event) {
        var selectedRows = event.getParam("selectedRows");
        cmp.set("v.selectedRowsCount", selectedRows.length);
    }
});
