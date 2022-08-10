const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." ,
        author: "Albert Einstein"
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    

];

const quote= document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const today_quote =quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = today_quote.quote;
author.innerText= today_quote.author;