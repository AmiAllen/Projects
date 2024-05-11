angular.module('filterApp', [])
    .controller('FilterController', function($scope) {
        $scope.items = ["apple", "banana", "orange", "grape", "watermelon", "kiwi"];
    });