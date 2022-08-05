// const express = require('express');

const didShowMessage = false;

// let did_show_message = true;

function showMessage() {
  const message = 'I like logs';

  for (let i = 0; i < 5; i += 1) {
    console.log(message);
  }
}

if (didShowMessage) {
  showMessage();
}

// const showTask = () => {};

module.exports = didShowMessage;
