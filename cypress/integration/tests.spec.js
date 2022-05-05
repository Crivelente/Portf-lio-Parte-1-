/// <reference types="cypress" />

describe('Tests', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('Soma', () => {

        cy.get('#input').type("3+2")

        cy.get('#equals').click()

        cy.get('#input').should('have.value', 5)
    });

    it('Multiplicação', () => {
        
        cy.get('#input').type("3*2")

        cy.get('#equals').click()

        cy.get('#input').should('have.value', 6)
    });

    it('Divisão', () => {
        
        cy.get('#input').type("3/2")

        cy.get('#equals').click()

        cy.get('#input').should('have.value', 1.5)
    });

    it('Subtração', () => {
        
        cy.get('#input').type("3-2")

        cy.get('#equals').click()

        cy.get('#input').should('have.value', 1)
    });

    it('Subtração de numero negativo', () => {
        
        cy.get('#input').type("3-4")

        cy.get('#equals').click()

        cy.get('#input').should('have.value', -1)
    });
});