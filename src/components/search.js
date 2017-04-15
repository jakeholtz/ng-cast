angular.module('video-player')

.directive('search', function() {
  return {
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope){
      this.result = () => {};
    },
    templateUrl: 'src/templates/search.html'
  };
});
