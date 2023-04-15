describe('Login Page', () => {
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
    it('Should throw an error when we put in the wrong email', () => {
        cy.get('#email').type('test')
        cy.get('#pass').type('password')
        cy.get('.submit').click()
        cy.get('.error-code').should('contain', 'Invalid Username or Password')
     })
     it('Should throw an error when we put in the wrong password', () => {
        cy.get('#email').type('test@test.com')
        cy.get('#pass').type('pass')
        cy.get('.submit').click()
        cy.get('.error-code').should('contain', 'Invalid Username or Password')
     })
     it('Should throw an error when we dont enter user or password', () => {
        cy.get('.submit').click()
        cy.get('.error-code').should('contain', 'Invalid Username or Password')
     })
   
})