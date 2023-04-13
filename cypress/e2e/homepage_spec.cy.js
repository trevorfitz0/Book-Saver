describe('Main Page', () => {
    beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=JL2wo9KGenD4ya0vsuAP1IGxduivvAwS',{
        fixture: "lists.json"
    })
    it('Should show the main page with a header', () => {
        cy.get('h1').contains('h1','Book-Saver')
        })
})
    })
