app.factory('routeHandler', function($location, viewerOptions, sourceFile) {
    return Base.extend({
        constructor: function() {
            this.location = $location;
            this.path = $location.path();
            this.helpers = new viewerOptions({});
        },

        loadFile: function(tree) {
            var fileId = this.path.match(/F-(\d+)/)[1];

            if (fileId) {
                var self = this;

                setTimeout(function() {
                    var node = tree.fetch_node(fileId),
                        file = new sourceFile(tree, node);

                    self.helpers.scope = { file: file, name: node.name };
                    self.helpers.openTree();
                }, 10);
            }
        }
    });
});
