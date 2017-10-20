const app = require('./main.js');

const authUtil = require('./authUtil.js');

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'login',
      url: '/login',
      template: '<login-page></login-page>'
    })
    .state({
      name: 'profile',
      url: '/profile',
      template: '<profile-page></profile-page>',
      resolve: {
        checkAuthorized: function() {
          return new Promise(function (resolve, reject) {
            if (authUtil.isLoggedIn()) {
              resolve();
            } else {
              reject();
            }
          })
        }
      }
    });

  $urlRouterProvider.when('', 'login');
});