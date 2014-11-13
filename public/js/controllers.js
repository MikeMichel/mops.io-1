angular.module('mopsiApp.controllers', [])

.controller('ReposController', function ($scope, $stateParams, popupService, $window, $modal, $log, Repos, ReposDelete) {
  $scope.repos = Repos.get({
    id: $stateParams.id
  });
  $scope.deleteRepo = function (name) {
    if (popupService.showPopup('Really delete ' + name + '?')) {
      ReposDelete.get({
        name: name
      });
      $window.location.href = '';
    }
  }
  ////
  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size, name) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        },
        name: function () {
          console.log('Size: ' + size + ' und Repo: ' + name);
          return name;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  }
  ///Pagination
  $scope.totalItems = 64;
  $scope.currentPage = 1;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function () {
    console.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;


})

.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items, name) {

  $scope.items = items;
  $scope.reponame = name;

  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
})

.controller('ReposTagsController', function ($scope, $stateParams, ReposTags) {
  $scope.reponame = $stateParams.name;
  console.log('Tags ' + $stateParams.name);

  $scope.tags = ReposTags.get({
    name: $stateParams.name
  });
})

.controller('ImageLayerController', function ($scope, $stateParams, ImageLayer) {

  $scope.details = ImageLayer.get({ //ruft .factory ImageLayer in services.js auf
    id: $stateParams.id //übergibt id, damit der service mit der var "id " arbeiten kann
  });
})
  .controller('SettingsController', function ($scope, $stateParams, dialogs, Settings) {

    $scope.settings = new Settings(); //this object now has a $save() method
    $scope.updateSettings = function () {
      $scope.settings.$save(function (status) {
        dialogs.notify('Settings Saved!', 'Looks good man.');
        $state.go('viewRepos');
      }, function (error) {
        // failure
        dialogs.error('ERROR!', 'Something bad happened!');
      });
    };
    $scope.loadSettings = function () {
      $scope.settings = Settings.get();
    };
    $scope.loadSettings();
  })


.controller('AppsController', function ($scope, $stateParams, popupService, $window, Apps, AppKill) {
  $scope.apps = Apps.get({
    id: $stateParams.id
  });
  $scope.appKill = function (name) {
    if (popupService.showPopup('Really kill ' + name + '?')) {
      AppKill.get({
        name: name
      });
      $window.location.href = '';
    }
  }
})

.controller('AppDetailsController', function ($scope, $stateParams, AppDetails) {

  $scope.details = AppDetails.get({
    id: $stateParams.id
  });
})

.controller('AppDeployController', function ($scope, $state, $stateParams, AppDeploy, Settings) {
  $scope.settings = Settings.get();
  $scope.form = {
    reponame: $stateParams.reponame,
    tag: $stateParams.tag
  };

  $scope.app = new AppDeploy();

  $scope.appDeploy = function () {

    image: $stateParams.reponame

    $scope.app.$save(function () {
      console.log('image ' + $stateParams.reponame);
      $state.go('apps'); // ruft /apps in app.js auf
    });
  }
})

.controller('ImageTagsController', function ($scope, $stateParams, Image) {

  $scope.tags = Image.get({
    name: $stateParams.name
  });
})

.controller('ImageDetailsController', function ($scope, $stateParams, Details) {

  $scope.details = Details.get({
    details: $stateParams.details
  });
})
