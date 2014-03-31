app.factory('sourceFile', function() {
    return sourceFileHelper;
});

var sourceFileHelper = Base.extend({
    constructor: function(tree, file) {
        this.tree = tree;
        this.file = file;
    },

    getPath: function() {
        var path = this.tree.get_path(this.file._id);
        path.push(this.file.name);

        return path.join('/');
    }
});
