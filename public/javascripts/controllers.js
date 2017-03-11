const MAX_PRODUCTS_TO_SHOW = 5;

function isJSON(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

var mainController = function($scope, $http, $location){
    $scope.message = 'launch the application';

    $http.get('/products').then(function successCallback (res){
      $scope.products = res.data;
      // set the hot products on sale
      // needs to be modified w.r.t a certain algrithm in the future
      if($scope.products.length <= MAX_PRODUCTS_TO_SHOW) {
        var temp = $scope.products;
        var last2first = temp.pop();
        var first2last = temp.shift();
        temp.splice(0, 0, last2first);
        temp.push(first2last);
        $scope.hotProducts = temp;
        console.log($scope.hotProducts);
      }
    },function errorCallback (error){
      console.log(error);
    });

    $scope.showOneProduct = function(index) {
      $location.path('/oneProduct/' + index);
    }
    $scope.thumbnails = [
      {
        name: 'Comestics',
        description: '德国多种品牌护肤品',
        src: '../images/thumbnails/hufu02.png'
      },
      {
        name: 'Health Products',
        description: '德国保健品',
        src: '../images/thumbnails/baojian01.png'
      },
      {
        name: 'Baby Mummy',
        description: '母婴',
        src: '../images/thumbnails/muying01.png'
      }
    ];
};

var productsCtrl = function($scope, $http, $location) {
}

var oneProductCtrl = function($scope, $http, $routeParams) {
  console.log('visiting the product page');
  var productIndex = $routeParams.index;
  $scope.oneProduct = $scope.products[productIndex];
}

app.
controller('mainController', mainController).
controller('productsCtrl', productsCtrl).
controller('oneProductCtrl', oneProductCtrl);
