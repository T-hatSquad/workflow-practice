
const showBooksTemplate = require('./templates/books.handlebars')

const onGetBooksSuccess = (data) => {
  console.log(data)
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.content').html(showBooksHtml)
  $('#message').text('Success!')
}

const onGetBooksFailure = function (data) {
  $('#message').text('Failure!')
}

module.exports = {
  onGetBooksSuccess,
  onGetBooksFailure
}
