app.controller('NodeController', function($scope) {
    var node = $scope.node;

    if (node.is_dir) {
        $scope.tree = node.tree
    }
});
