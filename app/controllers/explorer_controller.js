/*
   Handles the logic and data for the File Explorer Tree
 */
app.controller('ExplorerController', function($rootScope, $scope, $http) {
    // Sends an ajax request like 'get http://localhost:3000/tree.json'
    $http.get(document.kittcat['api_url'] + document.kittcat['tree_endpoint']).success(function(data) {
        var treeCollection = new Tree(data);

        // Shortcuts
        $scope.root = treeCollection.tree[0]
        $scope.tree = $scope.root.tree;

        // Because we will need them to be define for other controllers
        $rootScope.treeName = $scope.root.name;
        $rootScope.treeModel = treeCollection;

        // Will load a file and expend the file tree if the URL contains a file ID.
        $scope.router.loadFile(treeCollection);
    });

    /*
      Callback for click on file nodes
     */
    $scope.showFile = function(node) {
        $rootScope.$emit("showFileEvent", { node: node });
    };
});
