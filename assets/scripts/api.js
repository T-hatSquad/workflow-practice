
const getBooks = function () {
  return $.ajax({
    url: 'https://wdi-library-api.herokuapp.com/books',
    method: 'GET'
  })
}

module.exports = getBooks
