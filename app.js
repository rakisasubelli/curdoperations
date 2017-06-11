var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope){
    $scope.itemsList = [];
    var editRowIndex = -1;
    $scope.saveOrUpdate = function() {
        if(editRowIndex ==-1){
            $scope.itemsList.push({ 'firstName':$scope.firstName, 'lastName': $scope.lastName, 'city':$scope.city, 'state': $scope.state});
        }
        else{
            $scope.itemsList[editRowIndex] = { 'firstName':$scope.firstName, 'lastName': $scope.lastName, 'city':$scope.city, 'state': $scope.state};
            editRowIndex = -1;
        }
        $scope.reset();
    }
     $scope.removeItem = function (firstName) {
        var index = -1;
        var comArr = eval($scope.itemsList);
        console.log("The common arrat"+comArr);
        for (let i=0; i<=comArr.length;i++){
            if(comArr[i]['firstName'] === firstName) {
                index = i;
                break;
            }
        }
        $scope.itemsList.splice(index,1);
     }
     $scope.showEditRow = function (rowIndex, row) {
        editRowIndex = rowIndex;
        $scope.firstName = row.firstName;
        $scope.lastName = row.lastName;
        $scope.city = row.city;
        $scope.state = row.state;
     }
     $scope.reset = function () {
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.city = '';
        $scope.state = '';
     }


})