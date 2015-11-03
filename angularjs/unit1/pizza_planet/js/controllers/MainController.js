app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic',
      price: 4.95
    }
  ];

  $scope.mains = [
    {
      name: 'bread',
      description: 'Best thing ever',
      price: 3.99
    },
    {
      name: 'shushi',
      description: 'Best thing ever',
      price: 12.99
    },
    {
      name: 'stake',
      description: 'Best thing ever',
      price: 8.99
    }
  ];

  $scope.extras = [
    {
      name: 'Coke',
      description: 'Best thing ever',
      price: 0.99
    },
    {
      name: 'vita 500',
      description: 'Best thing ever',
      price: 0.99
    },
    {
      name: 'water',
      description: 'Best thing ever',
      price: 0.99
    }
  ];

}]);
