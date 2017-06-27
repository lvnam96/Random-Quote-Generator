document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.getElementsByClassName('fa');
  
  function getQuote(e) {
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
  };
  getQuote();

  buttons[0].addEventListener('click', function() {
    var firstSection = document.getElementsByClassName('section1')[0];
    firstSection.style.height = '0';
    firstSection.children[0].style.display = 'none';
  });

  buttons[1].addEventListener('click', function() {
    var quote = document.getElementsByClassName('quote')[0].textContent,
    author = document.getElementsByClassName('author')[0].textContent,
    //there's a bug: README.md
    shareURL = "https://twitter.com/share?text=\"" + quote + "\" by " + author + "&related=lvnam96&hashtags=randomquote&via=lvnam96";
    window.open(shareURL);
  });

  buttons[2].addEventListener('click', function() {
    var menuDiv = document.getElementById('menuDiv'),
          quoteBox = document.getElementById('quoteBox'),
          i;
    if (menuDiv.classList.contains('invisible')) {
      menuDiv.className = '';
      quoteBox.style.marginTop = '100px';
      for (i = 0; i < 2; i++) {
        setTimeout(function(i) {
          menuDiv.children[i].style.visibility = 'visible';
        }, i*150, i);
      }
    } else {
      menuDiv.className = 'invisible';
      quoteBox.style.marginTop = '0';
      for (i = 0; i < 2; i++) menuDiv.children[i].style.visibility = 'hidden';
    }
  });

  buttons[3].addEventListener('click', function(e) {
    getQuote();
    buttons[3].className = 'fa fa-refresh fa-clicked';
    setTimeout(function() {buttons[3].className = 'fa fa-refresh';}, 500);
  });
});

