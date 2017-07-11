app.factory("friendfactory", function($http,$q){
    
    var object={
    callServer: function()
    {
        var result=$q.defer();
        function success(data)
        {
            result.resolve(data);
        }
        function error(err)
        {
            result.reject(err);
        }
        
        $http.get("server/list.json").then(success,error);
        return result.promise;
    }
    };
    return object;
})