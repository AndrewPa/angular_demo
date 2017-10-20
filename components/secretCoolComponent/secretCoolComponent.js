module.exports = {
  bindings: {
    coolDescription: '@'
  },
  
  template: require('./secretCoolComponent.html'),
  controller: function() {
    const $ctrl = this;
    console.info(`You have just loaded: ${$ctrl.coolDescription}`);
  }
};

/*
// Legacy directive syntax (approx, for reference):
app.directive('secretCool', [
    'dependency',
  function(
    dependency
  ) {
    return {
      scope: {
        coolDescription: '@'
      },

      controller: function() {
        dependency.doSomething();
        console.info(`You have just loaded: ${$ctrl.coolDescription}`)
      };
 }

      ...etc
    }
  }
]);
*/