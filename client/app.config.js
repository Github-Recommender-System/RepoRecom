angular.module('app')
  .config(['$authProvider', function($authProvider) {

    $authProvider.github({
      clientId: "c915274b9f730289a5f0",
      redirectUri: "http://localhost:9000/",
      url: "http://localhost:3000/auth/github",
    });

    $authProvider.httpInterceptor = true;

  }]);