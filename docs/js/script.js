// var currentQuote = '', currentAuthor = '';
//   $('#tweet-quote').on('click', function() {
//     if(!inIframe()) {
//       openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
//     }
//   });

function getQuote(e) {
	$.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
      var r = JSON.parse(response);
      document.getElementsByClassName('quote')[0].textContent = r.quote;
      console.log(r.quote);
      document.getElementsByClassName('source')[0].textContent = r.author;
      console.log(r.author);
    }
  });
};

document.addEventListener('DOMContentLoaded', function() {
  getQuote();
	document.getElementById('loadQuote').addEventListener('click', getQuote, false);
});