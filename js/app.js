// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('GalleryCtrl', function($scope, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {

  $scope.allImages = [
  {
    src: 'img/01.jpg'
  }, {
    src: 'img/02.jpg'
  }, {
    src: 'img/03.jpg'
  }, {
    src: 'img/04.jpg'
  }, {
    src: 'img/05.jpg'
  }, {
    src: 'img/06.jpg'
  }, {
    src: 'img/07.jpg'
  }, {
    src: 'img/08.jpg'
  }, {
    src: 'img/09.jpg'
  }, {
    src: 'img/10.jpg'
  },  {
    src: 'img/12.jpg'
  }, {
    src: 'img/13.jpg'
  }, {
    src: 'img/14.jpg'
  }, {
    src: 'img/15.jpg'
  }, {
    src: 'img/16.jpg'
  }, {
    src: 'img/17.jpg'
  }, {
    src: 'img/18.jpg'
  }, {
    src: 'img/19.jpg'
  }
  
  ];
 $scope.allImages2 = [
 {
    src: 'img/img2/01.jpg'
  }, {
    src: 'img/img2/02.jpg'
  }, {
    src: 'img/img2/03.jpg'
  }, {
    src: 'img/img2/04.jpg'
  }, {
    src: 'img/img2/05.jpg'
  }, {
    src: 'img/img2/06.jpg'
  }, {
    src: 'img/img2/07.jpg'
  }, {
    src: 'img/img2/08.jpg'
  }, {
    src: 'img/img2/09.jpg'
  }, {
    src: 'img/img2/10.jpg'
  },  {
    src: 'img/img2/12.jpg'
  },  {
    src: 'img/img2/14.jpg'
  }, {
    src: 'img/img2/15.jpg'
  }, {
    src: 'img/img2/16.jpg'
  }, {
    src: 'img/img2/17.jpg'
  }, {
    src: 'img/img2/18.jpg'
  }, {
    src: 'img/img2/19.jpg'
  }
  
  ];
  $scope.zoomMin = 1;
    $scope.loadImages = function() {
		
        // for(var i = 1; i < 20; i++) {
            // $scope.allImages.push({id: i, src: "http://www.manga.ae/cdn/14/0800/"+i+".jpg"});
			// $scope.allImages2.push({id: i, src: "http://www.manga.ae/cdn/17/0700/"+i+".jpg"}); 
        // }
		 // $scope.loadImages = function() {
        // for(var i = 1; i < 20; i++) {
            // $scope.allImages2.push({id: i, src: "http://www.manga.ae/cdn/14/0800/"+i+".jpg"});
        // }
    }
	
  $scope.showImages = function(index) {
    $scope.activeSlide = index;
    $scope.showModal('templates/gallery-zoomview.html');
  };
 $scope.showImages2 = function(index) {
    $scope.activeSlide = index;
    $scope.showModal('templates/gallery-zoomview2.html');
  };
  $scope.showModal = function(templateUrl) {
    $ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove()
  };

  $scope.updateSlideStatus = function(slide) {
    var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
    if (zoomFactor == $scope.zoomMin) {
      $ionicSlideBoxDelegate.enableSlide(true);
    } else {
      $ionicSlideBoxDelegate.enableSlide(false);
    }
  };
});
