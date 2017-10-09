angular.module('app').component('main', {
    templateUrl: '/components/main/main.html',
    controllerAs: 'mainCtrl',
    bindings: {
        name: '<'
      },
    controller: function(mainSrv) {
        this.animals = mainSrv.animals;
        console.log(this.animals)
    }
})