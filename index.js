const express = require('express');

let didShowMessage = false;

let did_show_message = true;

if (didShowMessage) {
  function showMessage() {
    const message = 'I like logs';

    for (let i = 0; i < 5; i++) {
      console.log(message);
    }
  }
}

const showTask = () => {};

module.exports = didShowMessage;
