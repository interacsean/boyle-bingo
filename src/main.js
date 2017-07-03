import angular from "angular";
import LocalStorageModule from "angular-local-storage";

angular.module('boyleBingo', ['LocalStorageModule'])
.config(function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('boyleBingo');
})
.service('bingoCard', ['localStorageService', '$rootScope', function(localStorageService, $rootScope){
  this.bingoCard = [];

  this.init = function(){
    if (!localStorageService.get('card')){
      this.bingoCard = Array.apply(null, Array(5)).map(Number.prototype.valueOf,1);
      var self = this;
      angular.forEach(this.bingoCard, function(v, k){
        self.bingoCard[k] = [{'txt':'', 'state':0},{'txt':'', 'state':0},{'txt':'', 'state':0},{'txt':'', 'state':0},{'txt':'', 'state':0}];
          //Array.apply(null, Array(5)).map(Number.prototype.valueOf,1);
      });
      this.bingoCard[2][2] = {'txt':'(Free)', 'state':1};
    }else{
      this.bingoCard = localStorageService.get('card');
    };
    return this.bingoCard;
  }
  this.save = function(card){
    localStorageService.set('card',card);
  }
}])
.controller('BingoPicker', function($scope, bingoCard) {
  var vm=this;
  vm.card = bingoCard.init();

  $scope.$watch("vm.card", function(value){
      bingoCard.save(value);
  }, true);
  vm.editMode = 0;
  vm.toggleEditMode = function(){
    vm.editMode = 1-vm.editMode;
  }
  vm.hitSquare = function(rK, cK){
    if (rK != 2 || cK != 2){
      vm.card[rK][cK].state = 1-vm.card[rK][cK].state;
    }
  }
});
