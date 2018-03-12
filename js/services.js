'use strict';

var servicesModule = angular.module('myApp.services', []);

servicesModule.value('version', '0.1');



servicesModule.factory('Storage', function() {
  
    var newServiceInstance = {};
    
    newServiceInstance.loadObject = function(key) {

        var data = [];

        var json_object = localStorage[key];

        if (json_object) {
          data = JSON.parse(json_object);
        }
        return data;
    };

    newServiceInstance.clear = function() {

      localStorage.clear();
      
    };


    newServiceInstance.supported = function() {

      return 'localStorage' in window && window['localStorage'] !== null;
      
    };

    
    
    newServiceInstance.saveObject = function(objectToSave,key) {

        localStorage[key] = JSON.stringify(objectToSave);

    };
    
    return newServiceInstance;

});