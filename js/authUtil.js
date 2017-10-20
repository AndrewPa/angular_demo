const _ = require('lodash');

// Constants
const TOTALLY_LEGIT_TOKEN = 'ABC123';
const NOT_SECURE_CREDENTIALS = {
  username: '00437',
  password: 'bedsheets'
};

const authUtil = {
  attemptLogin,
  signOutUser,
  isLoggedIn
};

function attemptLogin(credentials) {
  if (_.isEqual(credentials, NOT_SECURE_CREDENTIALS)) {
    localStorage.setItem('bogus_token', TOTALLY_LEGIT_TOKEN);
  }
}

function signOutUser() { localStorage.clear(); }

function isLoggedIn(blockAnnoyances) {
  const bogusToken = localStorage.getItem('bogus_token');

  if (bogusToken !== TOTALLY_LEGIT_TOKEN) {
    if (!blockAnnoyances) {
      alertWithAnnoyingErrorMessage();
    }

    return false;
  }

  return true;
}

function alertWithAnnoyingErrorMessage() { window.alert('Nah-ah-ah!'); }

module.exports = authUtil;