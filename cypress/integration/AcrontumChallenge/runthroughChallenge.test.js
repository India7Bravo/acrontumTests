/// <reference types="cypress" />

describe("User journey QA challenge", () => {
    beforeEach(() => {
        cy.goTo()
    })

    it('The user searches for one of the available books, opens it, adds to collection and verifies', () => {
        // User goes to the book store, searches for
        // the book and clicks on it to go to the detail page
        cy.contains('Go To Book Store').scrollIntoView().click({force: true})
        cy.get('#searchBox').type('Elo')
        cy.contains("Eloquent").click({force: true})

        // Expands the elements side-bar menu to extend
        // the page and get to the profile section
        cy.get(':nth-child(1) > .group-header > .header-wrapper').click()

        // Adds book to my collection
        cy.get('.text-right > #addNewRecordButton').click({force: true})

        // Ensures the alert says "Book added to your collection."
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('Book added to your collection.');
         })

        // Extends the menu to get to the profile section
        cy.contains('Book Store Application').click({force: true})
        cy.get('li').eq(31).click()

        // Makes sure the book is in my profile
        cy.contains('.main-header', 'Profile').should('be.visible')
        cy.contains("Eloquent JavaScript, Second Edition").should('be.visible')
    })

    it('The user gets logged in and taken to the profile page to verify the book', () => {
        // Makes sure the book is in my profile
        cy.contains('.main-header', 'Profile').should('be.visible')
        cy.contains("Eloquent JavaScript, Second Edition").should('be.visible')

        // Deletes the book for the next runthrough and
        // dismisses the modal
        cy.get('#delete-record-undefined > svg').click()
        cy.get('#closeSmallModal-ok').click()

        // Ensures the alert says "Book deleted."
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('Book deleted.');
         })

        // Makes sure the book is deleted
        cy.contains("Eloquent JavaScript, Second Edition").should('not.exist')
    })
})