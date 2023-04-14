describe('Main Page', () => {
    beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=JL2wo9KGenD4ya0vsuAP1IGxduivvAwS',{fixture: "lists.json"})
    cy.visit('http://localhost:3000/login')
})
   it('Should be able to login', () => {
       cy.get('#email').type('test@test.com')
       cy.get('#pass').type('password')
       cy.get('.submit').click()
       cy.get('.users-name').should('contain', 'Hello, test testing!')
    })
   
})