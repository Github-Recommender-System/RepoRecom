angular
  .module('app')  
  .config(function ($stateProvider, $urlRouterProvider, $authProvider) {
 
    // Redirect to the login page if not authenticated
    var requireAuthentication = function ($location, $auth, AuthenticationService) {

      if ($auth.isAuthenticated()) {
        return AuthenticationService.login()
      } else {
        return $location.path('/login');
      }
    };

    $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: 'views/login.html'
    })
    
     
      // For any unmatched url, redirect to /login
      $urlRouterProvider.otherwise("/login");



  })