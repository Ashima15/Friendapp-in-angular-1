app.controller("friendctrl",function($scope,friendfactory){
    
    var promise=friendfactory.callServer($scope);
    
    for(var i=1;i<=10;i++)
        console.log(i);
    
    promise.then(function(data){
       $scope.result=  data;
        console.log($scope.result);
    },function (error){
         $scope.result=  error;
    });
   
});