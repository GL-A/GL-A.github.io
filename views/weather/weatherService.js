angular.module('app').service('weatherService', function($http){

  this.getWeather = function(){
    return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=Provo&appid=https://api.openweathermap.org/data/2.5/forecast/daily?q=Provo&appid=18aa061c36413daf770d6f5d5715972e')
    .then(function(res){
      return res;
    })
  }
})
// http://api.openweathermap.org/data/2.5/weather?lat=40.2181&lon=-111.6133&appid=18aa061c36413daf770d6f5d5715972e
// http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=7&appid=18aa061c36413daf770d6f5d5715972e
