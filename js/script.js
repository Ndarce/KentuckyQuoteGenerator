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
let quotes = [
{quote:'Heaven must be a Kentucky kind of place.' ,
source: 'Daniel Boone',
year:1774,
tags: '#Kentucky'},
{quote: 'I never met a Kentuckian who wasn\'t either thinking about going home or going home.' ,
source: 'Albert B.(Happy) Chandler',
tags:'#Kentucky' },
{quote:'You know you are in Kentucky when you can visit Paris, London, Versailles and Florence all in one day',
source:'Unknown',
tags:'#Kentucky',
},
{quote:'If these United States can be called a body, then Kentucky can be called its heart.',
source: 'Jesse Stuart',
tags:'#Kentucky',
},
{quote:'If the world ends, I\'ll just head on down to Kentucky because they\'re always 20 years behind.',
source:'Mark Twain',
citation:'Life on the Mississippi',
tags:'#Kentucky',
},
]

console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  var quoteKentucky = Math.random(Math.floor() * (quotes.length)); // generates random quote from array via number 1-5
  console.log(quoteKentucky);
  console.log(quotes[quoteKentucky]);
  return quotes  [quoteKentucky]; //returns random quote via generated number
}


/***
 * `printQuote` function
***/
//function to generate Quote on page. 
function printQuote(message) {
  var answer = getRandomQuote(); 
  var message = `"<p class='quote'>" + ${answer.quote} + "</p>" + "<p class='source'>" + ${answer.source} + "</p>" + "<p class='year'>" + ${answer.year} + "</p>" + "<p class='citation'>" + ${answer.citation}'</p>'`;
  
  document.getElementById('quote-box').innerHTML = message;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
