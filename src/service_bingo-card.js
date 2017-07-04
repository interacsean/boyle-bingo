import angular from 'angular';
import LocalStorageModule from "angular-local-storage";

export default angular.module('boyleBingo.service.bingoCard', [])
  .service('bingoCard', ['localStorageService', '$rootScope', function(localStorageService, $rootScope){
    this.bingoCard = [];

    this.init = function(){
      if (!localStorageService.get('card')){
        this.bingoCard = Array.apply(null, Array(5)).map(Number.prototype.valueOf,1);
        var self = this;
        angular.forEach(this.bingoCard, function(v, k){
            self.bingoCard[k] = Array.apply(null, Array(5)).map(function(){ return {'txt':'', 'state':0}; });
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
  .name;