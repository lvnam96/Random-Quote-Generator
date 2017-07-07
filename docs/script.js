document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.getElementsByClassName('buttons'),
      moveDownBTN = buttons[0].children[0],
      tweetBTN = buttons[1].children[0],
      menuBTN = buttons[1].children[1],
      newQuoteBTN = buttons[1].children[2];
  
  function getQuote() {
    $.ajax({
      headers: {
        'X-Mashape-Key': 'hwDTMUUCVAmshcSC33BAIIq3wLunp1WhqJcjsn42Fmxrg5qaMU',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies&count=1',
      success: function(response) {
        // response = JSON.parse(response);//This statement thow a TypeError. Basically if the response header is text/html you need to parse, and if the response header is application/json it is already parsed for you.
        document.getElementsByClassName('quote')[0].textContent = response.quote;
        document.getElementsByClassName('author')[0].textContent = response.author;
      },
      error: function() {
        alert('Sorry, the server is not responding.');
      }
    });
  }
  getQuote();

  moveDownBTN.addEventListener('click', function(e) {
    var firstSection = document.getElementsByClassName('section1')[0];
    firstSection.style.height = '0';
    firstSection.children[0].style.display = 'none';
  });

  tweetBTN.addEventListener('click', function(e) {
    var quote = document.getElementsByClassName('quote')[0].textContent,
    author = document.getElementsByClassName('author')[0].textContent,
    //there's a bug: README.md
    shareURL = "https://twitter.com/share?text=\"" + quote + "\" by " + author + "&related=lvnam96&hashtags=randomquote&via=lvnam96";
    window.open(shareURL);
  });

  menuBTN.addEventListener('click', function(e) {
    var menuDiv = document.getElementById('menuDiv'),
          quoteBox = document.getElementById('quoteBox'),
          i;
    menuDiv.classList.toggle('hidding');
  });

  newQuoteBTN.addEventListener('click', function(e) {
    getQuote();
    newQuoteBTN.children[0].classList.toggle('clicked');
    setTimeout(function() {
      newQuoteBTN.children[0].classList.toggle('clicked');
    }, 900);
  });
});

