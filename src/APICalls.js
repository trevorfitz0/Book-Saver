
function getAllBooks() {
    return fetch('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=JL2wo9KGenD4ya0vsuAP1IGxduivvAwS')
    .then(response => response.json())
}

export default getAllBooks