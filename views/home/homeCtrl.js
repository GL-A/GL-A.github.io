angular.module('app').controller('homeCtrl', function($scope, mainService, $stateParams){

  $scope.getThePeople = mainService.getThePeople()
  .then(function(response){
    console.log(response, 'all');
    $scope.allChamps = response;


  })




  // $scope.splashUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg";


  // $scope.getOri = mainService.ori()
  // .then(function(response){
  //   console.log(response);
  //   $scope.ori = response;
  // })
})
