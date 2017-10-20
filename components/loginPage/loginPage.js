const _ = require('lodash');

const authUtil = require('../../js/authUtil.js');

module.exports = {
  template: require('./loginPage.html'),
  controller: [
    '$state',
  function(
    $state
  ) {

    const $ctrl = this;

    Object.assign($ctrl, {
      credentials: {},

      logInUser: function() {
        authUtil.attemptLogin($ctrl.credentials);
        goToProfileIfLoggedIn();
      }
    });

    goToProfileIfLoggedIn(true);

    function goToProfileIfLoggedIn(blockAnnoyance) {
      if (authUtil.isLoggedIn(blockAnnoyance)) { $state.go('profile'); }
    }
  }]
};