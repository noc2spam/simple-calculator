import { result } from "cypress/types/lodash";

describe('Calculator App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/'); 
    });

    it('performs multiplication correctly', () => {
        cy.get('button').contains('2').click();
        cy.get('button').contains('*').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('=').click();
        cy.get('.text-3xl.font-bold').should('have.text', '6');
    });

    it('performs subtraction correctly', () => {
        cy.get('button').contains('5').click();
        cy.get('button').contains('-').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('=').click();
        cy.get('.text-3xl').should('have.text', '3');
    });

    it('performs multiplication correctly', () => {
        cy.get('button').contains('2').click();
        cy.get('button').contains('*').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('=').click();
        cy.get('.text-3xl').should('have.text', '6');
    });

    it('performs division correctly', () => {
        cy.get('button').contains('6').click();
        cy.get('button').contains('/').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('=').click();
        cy.get('.text-3xl').should('have.text', '2');
    });

    it('handles negative numbers correctly', () => {
        cy.get('button').contains('5').click();
        cy.get('button').contains('-/+').click();
        cy.get('.text-3xl').should('have.text', '-5');
    });

    it('clears the memory correctly', () => {
        cy.get('button').contains('5').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('=').click();
        cy.get('.text-3xl').should('have.text', '7');
        cy.get('button').contains('MC').click();
        cy.get('.text-3xl').should('have.text', '');
    });
});
