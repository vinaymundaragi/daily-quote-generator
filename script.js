const apiUrl = "https://type.fit/api/quotes";
//generates a random number between 1 to 100

async function getQuote(apiUrl) {
  let number = Math.floor(Math.random() * 10) + 1;
  const response = await fetch(apiUrl);
  let data = await response.json();
  let authorName = data[number].author.split(",")[0];
  let quote = data[number].text;

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = authorName;
}
getQuote(apiUrl);

function tweetMyQuote() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "----- " +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
}
