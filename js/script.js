/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
   quote: " Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of other's opinions drown out your own inner voice.",
   source: "Steve Jobs",
   citation: "Stanford University Commencement Speech",
   year: 2005
  },
  {
    quote: "Pain is temporary. It may last for a minute, or an hour or a day, or even a year. But eventually, it will subside. And something else take its place. If I quit, however, it will last forever.",
    source: "Eric Thomas",
    citation: "Leadership and Service Conference Speech",
    year: 2012
  },
  {
    quote: "The important thing is this: to be ready at any moment to sacrifice what you are for what you could become.",
    source: "Eric Thomas",
    citation: "Leadership and Service Conference Speech",
    year: 2012,
    tag: "Motivational"
  },
  {
    quote: "In life, we are always in the middle. And what I mean by that is this: there's always people doing better than you, and there are always people you're doing better than.",
    source: "Maino",
    citation: "Bootleg Kev Podcast Interview",
    year: 2023
  },
  {
    quote: "When I held an important position, they always praise me, but when I lost that position, they forgot about me and didn’t fulfill their promises. Don’t trust your positions or the sums of money, neither your strength nor your intelligence. Nothing lasts forever.",
    source: "Arnold Schwarzenegger",
    citation: "Facebook Post",
    year: 2016
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() { 
  const randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}


/***
 * `printQuote` function
***/
function printQuote() { 
  const randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p>
                <p class="source">${randomQuote.source}
                `;
              
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.tag) {
    html += `<span class="tag">${randomQuote.tag}</span>`;
  }

  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
  randomColor();
}

// Generates a random color for the background
function randomColor() { 
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}


// Automatically changes the quote every 10 seconds
setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);