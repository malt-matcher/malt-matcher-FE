///<reference types="Cypress" />

describe('Landing Page' , () => {

  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })

  it('takes user to location and main UI', () => {
    cy.get('h1').contains('Welcome')
  })

  it('takes user to next page of the UI', () => {
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3001/maltfinder')
  })
  
})