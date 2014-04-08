app.controller('FileViewerController', function($rootScope, $scope, $http, $sce, $cookieStore, sourceCode, sourceFile, viewerOptions) {
    $scope.allLangs = document.kittcat.languages;
    $scope.langStyles = document.kittcat.langStyles;

    $rootScope.$on("showFileEvent", function(event, params) {
        var node = params.node;
        $scope.name = node.name;

        $http.get(document.kittcat['api_url'] + '/file/' + node._id).success(function(data) {
            var source  = new sourceCode($scope, data, $sce),
                file    = new sourceFile($rootScope.treeModel, node),
                options = new viewerOptions($scope, $cookieStore);

            // Set all the needed helpers
            $scope.source = source;
            $scope.file = file;
            $scope.optionsHelper = options;

            $scope.langStyle = options.selectDefaultLangHighlight(source);

            // Sets the models & variables
            source.detectLanguage();

            source.computeSourceLength();
            source.formatCode();

            // Eye candy
            options.updateSelects(source.detectedLang);

            $scope.router.loadLine();
        });
    });
});
