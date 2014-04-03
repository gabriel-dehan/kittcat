app.factory('routeHandler', function($rootScope, $location, viewerOptions, sourceFile) {
    return Base.extend({
        constructor: function() {
            this.rootScope = $rootScope;
            this.location = $location;
            this.helpers = new viewerOptions({});
        },

        urlFileReference: function() {
            var path = this.location.path(),
                match = path.match(/F(\d+)/);

            if (match) {
                return match[1];
            }

            return false;
        },

        urlLineReference: function() {
            var path = this.location.path(),
                match = path.match(/L(\d+)/);

            if (match) {
                return match[1];
            }

            return false;
        },

        loadFile: function(tree) {
            var fileId = this.urlFileReference();

            if (fileId) {
                var self = this;

                setTimeout(function() {
                    var node = tree.fetch_node(fileId),
                        file = new sourceFile(tree, node);

                    self.helpers.scope = { file: file, name: node.name };
                    self.helpers.openTree();
                }, 10);
            }
        },

        loadLine: function() {
            var index = this.urlLineReference();

            if (index) {
                var self = this;

                setTimeout(function() {
                    self.helpers.selectLine(index - 1);
                }, 10);
            }
        }
    });
});
