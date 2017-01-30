angular.module('app').controller('detailsCtrl', function($scope, mainService, $stateParams, $http){

    var ID = $stateParams.id;

    $scope.getThePeople = mainService.getThePeople()
    .then(function(response){

      $scope.allChamps = response;
    })



  $scope.oneChamp = function(){
    return $http.get('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/' + ID + '?champData=all&api_key=RGAPI-fa1890b1-56ed-4e01-950f-e70ae86157ca')
    .then(function(res){
      console.log(res, 'ctrl')
      $scope.theChamp = res;
      $scope.abilities = res.data.spells;
      $scope.skins = res.data.skins;
      $scope.loreSorter = function(lore){
        $scope.fixLore = lore.split('<br>').join('\n');



      }
      $scope.loreSorter(res.data.lore);
      console.log($scope.skins, 'skins');

    })
  }







  $scope.oneChamp();
  console.log($stateParams.id);





})
