angular.module('video-player', [])
.directive('app', function() {
  return {
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope){
      this.selectVideo = function () {};
      this.searchResults = function () {};
      this.currentVideo = {};
      this.videos = [];
    },
    templateUrl: 'src/templates/app.html'
  };
});
