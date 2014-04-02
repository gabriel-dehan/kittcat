app.controller('ExplorerController', function($rootScope, $scope, $http, routeHandler) {
    $http.get(document.kittcat['api_url'] + document.kittcat['tree_endpoint']).success(function(data) {
        var treeCollection = new Tree(data);
        var routes = new routeHandler();

        $scope.root = treeCollection.tree[0]
        $scope.tree = $scope.root.tree;

        $rootScope.treeName = $scope.root.name;
        $rootScope.treeModel = treeCollection;

        routes.loadFile(treeCollection)
    });

    $scope.showFile = function(node) {
        $rootScope.$emit("showFileEvent", { node: node });
    };
});
