// // select HTML elements in the document
// const qotd = document.querySelector('#quotes');

// // Variables for URL
// const key = "32d50d5092def2908ab452a7027fc8cb"


// // URL
// // const url = `https://favqs.com/${key}/qotd`;
// const url = 'https://quoteslate.vercel.app/api/quotes/random'

// // Function to Fetch

// async function apiFetch() {
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             console.log(data); // testing only
//             displayResults(data); // uncomment when ready
//         } else {
//             throw Error(await response.text());
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// function displayResults(data) {
//     const randomQuote = document.createElement('p');     // create a <p> element
//     randomQuote.textContent = `"${data.quote}" - ${data.author}`;  // set its text
//     randomQuote.classList.add('quote');                  // add CSS class 'quote'
//     qotd.appendChild(randomQuote);                        // append the <p> to the container element
// }


// apiFetch();



const qotd = document.querySelector('#quotes');
const CACHE_KEY = 'cachedQuote';
const CACHE_TIMESTAMP_KEY = 'cachedQuoteTimestamp';
const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

async function fetchFromQuoteSlate() {
    const response = await fetch('https://quoteslate.vercel.app/api/quotes/random');
    if (!response.ok) throw new Error(`QuoteSlate error: ${response.status}`);
    const data = await response.json();
    return {
        quote: data.quote,
        author: data.author
    };
}

async function fetchFromZenQuotes() {
    const response = await fetch('https://zenquotes.io/api/today');
    if (!response.ok) throw new Error(`ZenQuotes error: ${response.status}`);
    const data = await response.json();
    return {
        quote: data[0].q,
        author: data[0].a
    };
}

async function fetchQuote() {
    const now = Date.now();

    // Check cached quote
    const cachedQuoteJSON = localStorage.getItem(CACHE_KEY);
    const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

    if (cachedQuoteJSON && cachedTimestamp && now - cachedTimestamp < CACHE_EXPIRY_MS) {
        // Use cached quote
        const cachedQuote = JSON.parse(cachedQuoteJSON);
        displayResults(cachedQuote.quote, cachedQuote.author);
        return;
    }

    // No valid cache: fetch from APIs with fallback
    try {
        const quoteData = await fetchFromQuoteSlate();
        saveCache(quoteData);
        displayResults(quoteData.quote, quoteData.author);
    } catch (error) {
        console.warn('Primary API failed, trying backup:', error);
        try {
            const quoteData = await fetchFromZenQuotes();
            saveCache(quoteData);
            displayResults(quoteData.quote, quoteData.author);
        } catch (err) {
            console.error('Backup API failed too:', err);
            qotd.textContent = "Sorry, quotes are unavailable right now.";
        }
    }
}

function saveCache(quoteData) {
    localStorage.setItem(CACHE_KEY, JSON.stringify(quoteData));
    localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now());
}

function displayResults(quote, author) {
    qotd.textContent = `“${quote}” — ${author}`;
}

fetchQuote();
