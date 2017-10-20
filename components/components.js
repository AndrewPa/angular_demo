const app = require('../js/main.js');

[{
  name: 'loginPage',
  definition: require('./loginPage/loginPage.js')
}, {
  name: 'profilePage',
  definition: require('./profilePage/profilePage.js')
}, {
  name: 'secretCoolComponent',
  definition: require('./secretCoolComponent/secretCoolComponent.js')
}]
  .forEach(function(c) { app.component(c.name, c.definition) });