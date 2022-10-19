///<reference types="Cypress" />

describe('Landing Page' , () => {

  beforeEach(() => {
    cy.intercept('POST', ' https://89c5da8f-5879-4c3a-959f-101eb08a1724.mock.pstmn.io/graphql').as('request')
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

describe('Malt Matcher Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/maltfinder')
  })

  it('has predictable user view on page render', () => {
    cy.get('h1[class=malt]').contains('Malt')
    cy.get('button').contains('Show')

  })
})

describe('Breweries Page', () => {

})

describe('Single Brewery Listing Page', () => {
  
})