angular.module('app')
.service('mainService', function($http){

  this.getThePeople = function(){
    return $http({
      method: 'GET',
      url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=RGAPI-fa1890b1-56ed-4e01-950f-e70ae86157ca'
    }).then(function(res){
      console.log(res.data.data);
      return res.data.data;
    })
  }


 // this.ori = function(){
 //   return $http({
 //     method: 'GET',
 //     url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/61?champData=all&api_key=RGAPI-fa1890b1-56ed-4e01-950f-e70ae86157ca'
 //   })
 // }




// passive image http://ddragon.leagueoflegends.com/cdn/7.2.1/img/passive/LeblancP.png

// indivisual champ https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/61?champData=spells&api_key=RGAPI-fa1890b1-56ed-4e01-950f-e70ae86157ca

// splash art http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg

// spell icons http://ddragon.leagueoflegends.com/cdn/7.2.1/img/spell/OrianaIzunaCommand.png

  // this.getOnePerson = function(id){
  //   return $http({
  //     method: 'GET',
  //     url: id
  //   })
  // }

})
