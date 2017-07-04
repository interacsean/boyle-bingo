import angular from "angular";
import LocalStorageModule from "angular-local-storage";

import controller_bingoPicker from "./controller_bingo-picker";
import service_bingoCard from "./service_bingo-card";

export default angular.module('boyleBingo', [LocalStorageModule, controller_bingoPicker, service_bingoCard])
.config(function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('boyleBingo');
});