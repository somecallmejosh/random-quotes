(function(){
  var quotes = [
    {
      "quote": "Here's a quote",
      "cite": "Source"
    },
    {
      "quote": "Here's another quote",
      "cite": "Someone"
    }
  ];
  var currentQuote = 0;
  var quoteCount = quotes.length;
  var newQuote = document.querySelector(".quote-content");
  var newCite = document.querySelector(".quote-citation");
  var updateButton = document.querySelector(".quote-toggle");

  function showCurrentQuote(){
    newQuote.textContent = quotes[currentQuote].quote;
    newCite.textContent = quotes[currentQuote].cite;
  }
  
  showCurrentQuote();
})();




