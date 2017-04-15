angular.module('video-player')
.directive('app', function() {
  return {
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      this.selectVideo = function () {};
      this.searchResults = function () {};
      this.currentVideo = exampleVideoData[0];
      this.videos = exampleVideoData;
    },
    templateUrl: 'src/templates/app.html'
  };
});
