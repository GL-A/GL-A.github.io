angular.module('app').controller('weatherCtrl', function($scope, weatherService){

  $scope.getWeather = weatherService.getWeather().then(function(res){
    console.log(res);
    $scope.cityDesc = res.data.list[0].weather[0];
    $scope.cityName = res.data.city;
    $scope.bg = res.data.list[0].weather.main;

  })
  switch ($scope.bg) {
  case 'Rain':
    {
      $scope.weatherBackground = {
        "background": "url('https://images.unsplash.com/photo-1455735459330-969b65c65b1c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=fe9ab50a61e4bb39bf5b138e769775f1')",
        "background-size": "cover"
      };
      break;
    }
 case 'overcast clouds':
    {
      $scope.weatherBackground = {
        "background": "url('https://images.unsplash.com/photo-1455735459330-969b65c65b1c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=fe9ab50a61e4bb39bf5b138e769775f1')",
        "background-size": "cover"
      };
      break;
    }
           case 'overcast clouds':
    {
      $scope.weatherBackground = {
        "background": "url('https://images.unsplash.com/photo-1455735459330-969b65c65b1c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=fe9ab50a61e4bb39bf5b138e769775f1')",
        "background-size": "cover"
      };
      break;
    }
           case 'overcast clouds':
    {
      $scope.weatherBackground = {
        "background": "url('https://images.unsplash.com/photo-1455735459330-969b65c65b1c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=fe9ab50a61e4bb39bf5b138e769775f1')",
        "background-size": "cover"
      };
      break;
    }
         defualt:
    {
      $scope.weatherBackground = {
        "background": "url('https://hifisimtech.com/wp-content/uploads/2016/11/MARKETING_IMAGES_SP1_8.png')",
        "background-size": "cover"
      };
      break;
    }

}

})
