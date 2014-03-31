app.directive('explorerNode', function(RecursionHelper) {
    return {
        template: document.templates['explorer-node'],
        compile: function(element) {
            // Use the compile function from the RecursionHelper,
            // And return the linking function(s) which it returns
            return RecursionHelper.compile(element);
        }
    };
});
