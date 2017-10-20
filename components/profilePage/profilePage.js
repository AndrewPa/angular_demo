const authUtil = require('../../js/authUtil.js');

module.exports = {
  template: require('./profilePage.html'),
  controller: [
    '$state',
  function(
    $state
  ) {
    const $ctrl = this;

    Object.assign($ctrl, {
      signOutUser: function() {
        authUtil.signOutUser();
        $state.go('login');
      }
    });
  }]
};