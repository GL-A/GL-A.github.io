angular.module('app').controller('weatherCtrl', function($scope, weatherService){

  // $scope.getWeather = weatherService.getWeather().then(function(res){
  //   console.log(res);
  //   $scope.cityDesc = res.data.list[0].weather[0];
  //   $scope.cityName = res.data.city;
  //   $scope.cityTemp = res.data.list[0].temp;
  //   $scope.bg = res.data.list[0].weather[0].description;
  //   console.log($scope.bg, 'back');
  //
  // })

  $scope.findCity = function(city){
    weatherService.findCity(city).then(function(res){
      console.log(res);
      $scope.cityDesc = res.data.list[0].weather[0];
      $scope.cityName = res.data.city;
      $scope.cityTemp = res.data.list[0].temp;
      $scope.bg = res.data.list[0].weather[0].description;
      $scope.icon = res.data.list[0].weather[0].icon;
      $scope.plz = res;
      $scope.wIcon = "http://openweathermap.org/img/w/" + $scope.icon+ ".png";
      console.log($scope.bg);

        if($scope.bg === 'broken clouds'){
          $scope.weatherBackground = 'https://s-media-cache-ak0.pinimg.com/originals/90/82/c7/9082c75f7cadf6381d86f0b8e2266d2d.jpg';

        }
        if($scope.bg === 'clear sky'){
          $scope.weatherBackground = 'http://media.gettyimages.com/videos/cartoon-grass-line-with-clear-sky-video-id105641096?s=640x640';

        }
        if($scope.bg === 'few clouds'){
          $scope.weatherBackground = 'http://il2.picdn.net/shutterstock/videos/1676278/thumb/1.jpg';

        }
        if($scope.bg === 'scattered clouds'){
          $scope.weatherBackground = 'http://img05.deviantart.net/b681/i/2006/273/7/4/scattered_clouds_by_craigus86.png';

        }
        if($scope.bg === 'shower rain'){
          $scope.weatherBackground = 'http://www.magic4walls.com/wp-content/uploads/2015/01/rain-umbrella-man-stool-surreal-picture-photo-black-and-white-694x417.jpg';

        }
        if($scope.bg === 'rain'){
          $scope.weatherBackground = 'http://khum.com/media/uploads/post/11911/Rain.jpg';

        }
        if($scope.bg === 'thunderstorm'){
          $scope.weatherBackground = 'http://dreamlandia.com/images/T/thunderstorm.jpg';

        }
        if($scope.bg === 'snow'){
          $scope.weatherBackground = 'http://johnwelchent.com/files/7013/9542/5054/snow.jpg';

        }
        if($scope.bg === 'mist'){
          $scope.weatherBackground = 'http://il3.picdn.net/shutterstock/videos/4629719/thumb/1.jpg?i10c=img.resize(height:160)';

        }
        if($scope.bg === 'moderate rain'){
          $scope.weatherBackground = 'http://media.oregonlive.com/weather_impact/photo/pdxweather2013jpg-cc20aabf32ebd589.jpg';

        }
        if($scope.bg === 'light rain'){
          $scope.weatherBackground = 'http://img05.deviantart.net/7d77/i/2010/014/4/c/day_light_rain_by_veeegeee.jpg';

        }





    })
  }
  $scope.findCity();














//   switch ($scope.bg) {
//   case 'Clear':
//     {
//       $scope.weatherBackground = {
//         "background": "url('https://images.unsplash.com/photo-1455735459330-969b65c65b1c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=fe9ab50a61e4bb39bf5b138e769775f1')",
//         "background-size": "cover"
//       };
//       break;
//     }
//  case 'overcast clouds':
//     {
//       $scope.weatherBackground = {
//         "background": "url('https://images.unsplash.com/photo-1455735459330-969b65c65b1c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=fe9ab50a61e4bb39bf5b138e769775f1')",
//         "background-size": "cover"
//       };
//       break;
//     }
//            case 'overcast clouds':
//     {
//       $scope.weatherBackground = {
//         "background": "url('https://images.unsplash.com/photo-1455735459330-969b65c65b1c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=fe9ab50a61e4bb39bf5b138e769775f1')",
//         "background-size": "cover"
//       };
//       break;
//     }
//            case 'overcast clouds':
//     {
//       $scope.weatherBackground = {
//         "background": "url('https://images.unsplash.com/photo-1455735459330-969b65c65b1c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=fe9ab50a61e4bb39bf5b138e769775f1')",
//         "background-size": "cover"
//       };
//       break;
//     }
//          defualt:
//     {
//       $scope.weatherBackground = {
//         "background": "url('https://hifisimtech.com/wp-content/uploads/2016/11/MARKETING_IMAGES_SP1_8.png')",
//         "background-size": "cover"
//       };
//       break;
//     }
//
// }

})
