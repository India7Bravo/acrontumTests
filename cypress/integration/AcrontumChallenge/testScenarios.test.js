/// <reference types="cypress" />

describe("Testing the login functionality", () => {
    beforeEach(() => {
        cy.goToApp()
    })

    it('Makes sure the fields and button are present on the login screen', () => {
        cy.contains('Login').should('be.visible')
        cy.get('#userName').should('be.visible')
        cy.get('#password').should('be.visible')
        cy.get('#login').should('be.visible')
    })

    it('As a user, I can login to the platform successfully', () => {
        cy.contains('.playgound-header', 'Login').should('be.visible')
        cy.get('#userName').click().type('India7Bravo')
        cy.get('#password').click().type('9CL5RDy4SgtXw2E!@')
        cy.get('#login').click()

        // Makes sure we have logged in by checking
        // the page heading
        cy.contains('.playgound-header', 'Profile').should('be.visible')
    })

    it('Logs in with incorrect details and verifies error message', () => {
        // Enters incorrect user information on the
        // login screen and then submits it
        cy.contains('.playgound-header', 'Login').should('be.visible')
        cy.get('#userName').click().type('Test')
        cy.get('#password').click().type('Test')
        cy.get('#login').click()

        // Ensures the error is correctly worded and displayed
        cy.contains('#name', 'Invalid username or password!').should('be.visible')
    })

    it('Enters a single character in the username field with the correct password and validates the error', () => {
        // Enters single character in username field with 
        // correct password and attempts to login
        cy.contains('.playgound-header', 'Login').should('be.visible')
        cy.get('#userName').click().type('T')
        cy.get('#password').click().type('9CL5RDy4SgtXw2E!@')
        cy.get('#login').click()

        // Ensures the error is correctly worded and displayed
        cy.contains('#name', 'Invalid username or password!').should('be.visible')
    })

    it('Enters a single character in the password field with the correct username and validates the error', () => {
        // Enters single character in password field with 
        // correct username and attempts to login
        cy.contains('.playgound-header', 'Login').should('be.visible')
        cy.get('#userName').click().type('India7Bravo')
        cy.get('#password').click().type('T')
        cy.get('#login').click()

        // Ensures the error is correctly worded and displayed
        cy.contains('#name', 'Invalid username or password!').should('be.visible')
    })


    it('Enters a single character both fields, clicks login and validates the error', () => {
        // Enters single character in username and password field 
        // and attempts to login
        cy.contains('.playgound-header', 'Login').should('be.visible')
        cy.get('#userName').click().type('T')
        cy.get('#password').click().type('T')
        cy.get('#login').click()

        // Ensures the error is correctly worded and displayed
        cy.contains('#name', 'Invalid username or password!').should('be.visible')
    })

})