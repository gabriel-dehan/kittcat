var app = angular.module('kittcat', []);

angular.element(document).on('ng-app-started', function(e) {
    angular.bootstrap(e.el, ['kittcat']);
});

app.run(['$rootScope', function(){

}]);
