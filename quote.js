const quotes = [
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    person: "Franklin D. Roosevelt",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    person: "Robert Frost",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt",
  },
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    person: "Chinese Proverb",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    person: "Sam Levenson",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: "Confucius",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    person: "Dalai Lama XIV",
  },
];

document.querySelector('#quote').addEventListener('click', function(){
    const para = document.getElementById('quote-p');
    const name = document.getElementById('name');

    const randomQuote = Math.floor(Math.random() * quotes.length);

    para.innerText = quotes[randomQuote].quote;
    name.innerText = quotes[randomQuote].person;

});
