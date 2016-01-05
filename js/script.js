(function(){
  var quotes = [
    {
      "quote": "Dear Mr. Vernon, we accept the fact that we had to sacrifice a whole Saturday in detention for whatever it was we did wrong. But we think you're crazy to make us write an essay telling you who we think we are. You see us as you want to see us - in the simplest terms, in the most convenient definitions. But what we found out is that each one of us is a brain...",
      "cite": "Brian Johnson"
    },
    {
      "quote": "I've done just about everything there is except a few things that are illegal. I'm a nymphomaniac.",
      "cite": "Allison Reynolds"
    },
    {
      "quote": "Stupid, worthless, no good, goddamn, freeloading son of a bitch. Retarded, big mouth, know-it-all, asshole, jerk.",
      "cite": "John Bender"
    },
    {
      "quote": "Hey, you're not urinating in here, man.",
      "cite": "Andrew Clark"
    },
    {
      "quote": "Oh really? You guys think I'm just some untouchable peasant? Serf? Peon? Well, maybe so. But following a broom around after shitheads like you for the last 8 years, I've learned a couple of things.",
      "cite": "Carl the Janitor"
    },
    {
      "quote": "The next time I have to come in here I'm crackin' skulls.",
      "cite": "Richard 'Dick' Vernon"
    },
    {
      "quote": "NO, I NEVER DID IT!",
      "cite": "Claire Standish"
    }
  ];
  var quoteCount = quotes.length;
  var newQuote = document.querySelector(".quote-content");
  var newCite = document.querySelector(".quote-citation");
  var twitterButton = document.querySelector(".share-button");
  var updateButton = document.querySelector(".quote-toggle");
  var quoteNumber;


  function setQuoteNumber() {
    quoteNumber = Math.floor(Math.random() * (quoteCount - 1) + 1 );
  }

  function truncateString() {
    var trimLength = 140 - "via @joshuabriley".length;
    var length = 6;
    var trimmedString = string;
  }

  function setTwitterLink(){
    // https://dev.twitter.com/web/tweet-button/web-intent
    var quoteLength = quotes[quoteNumber].quote.length;
    var link = "https://twitter.com/intent/tweet?via=joshuabriley&url=http://bit.ly/1Jqw89H&text=";
    var truncatedQuote = quotes[quoteNumber].quote.substring(0, 97);
    if(quoteLength < 97){
      twitterButton.setAttribute('href', link + quotes[quoteNumber].quote);
    } else {
      twitterButton.setAttribute('href', link + truncatedQuote + "…");
    } 
  }

  function showCurrentQuote(){
    newQuote.textContent = quotes[quoteNumber].quote;
    newCite.textContent = quotes[quoteNumber].cite;
    setTwitterLink();
  }

  function initializer(){
    setQuoteNumber();
    setTwitterLink();
    showCurrentQuote();
  }

  initializer();

  updateButton.addEventListener("click", setQuoteNumber);
  updateButton.addEventListener("click", showCurrentQuote);
})();




