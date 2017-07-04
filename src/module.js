import angular from 'angular';

export default angular.module('boyleBingo', ['LocalStorageModule'])
.config(function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('boyleBingo');
});