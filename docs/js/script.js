document.addEventListener('DOMContentLoaded', () => {
  const loadQuoteBtn = document.getElementById('loadQuote'),
  tweetBtn = document.getElementById('tweetBtn'),
  getQuote = e => {
    $.ajax({
      headers: {
        'X-Mashape-Key': 'hwDTMUUCVAmshcSC33BAIIq3wLunp1WhqJcjsn42Fmxrg5qaMU',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous&count=1',
      success: function(response) {
        const r = JSON.parse(response);
        document.getElementsByClassName('quote')[0].textContent = r.quote;
        document.getElementsByClassName('source')[0].textContent = r.author;
      }
    });
  };

  getQuote();

	loadQuoteBtn.addEventListener('click', getQuote, false);

	tweetBtn.addEventListener('click', () => {
		let quote = document.getElementsByClassName('quote')[0].textContent,
    author = document.getElementsByClassName('source')[0].textContent,
		//there's a bug: if there iss a semicolon (;) in the quote, the part after that semicolon of the quote shared on twitter will be missed.
		shareURL = `http:\/\/twitter.com\/share?text="${quote}" by ${author}.&related=lvnam96&hashtags=quote,super_quote&via=lvnam96`;
		window.open(shareURL,'Share this shit on Twitter!');
	});
});

