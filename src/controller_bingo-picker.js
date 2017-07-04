import angular from 'angular';
import service_bingoCard from './service_bingo-card';

export default angular.module('boyleBingo.controller.bingoPicker', [service_bingoCard])
  .controller('BingoPicker', function($scope, bingoCard) {
    var vm=this;
    vm.card = bingoCard.init();

    $scope.$watch("vm.card", function(value){
        bingoCard.save(value);
    }, true);
    vm.editMode = 0;
    vm.toggleEditMode = function() {
      vm.editMode = 1-vm.editMode;
    }
    vm.hitSquare = function(rK, cK) {
      if (rK != 2 || cK != 2){
        vm.card[rK][cK].state = 1-vm.card[rK][cK].state;
      }
    }
    vm.squareIsEditable = function (rK,cK) {
      return vm.editMode===1 && !(rK===2 && cK===2)
    }
  })
  .name;