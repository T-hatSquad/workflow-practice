'use strict'

const api = require('./api')
const ui = require('./ui')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#get-books').on('click', event => {
    event.preventDefault()
    api()
      .then(ui.onGetBooksSuccess)
      .catch(ui.onGetBooksFailure)
  })
})
