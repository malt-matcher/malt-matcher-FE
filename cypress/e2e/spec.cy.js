///<reference types="Cypress" />

describe('Landing Page' , () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('takes user to location and main UI', () => {
    cy.get('h1').contains('Welcome')
  })

  it('takes user to next page of the UI', () => {
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3000/maltfinder')
  })

})

describe('Malt Matcher Page', () => {
  beforeEach(() => {
    //intercept will go here//
    //reference https://www.youtube.com/watch?v=sTfmURpY20I for setup
    // cy.intercept('POST', 'https://89c5da8f-5879-4c3a-959f-101eb08a1724.mock.pstmn.io/graphql', (req) => {
    //   if(req.body.operationName === 'GET_BREWERIES'){
    //     req.alias = 'GET_BREWERIES'
    //     req.continue()
    //   }
    // })
    // cy.visit('http://localhost:3000/maltfinder')
    // cy.wait('@GET_BREWERIES')
    // confirm that GET_BREWERIES is the operationName in the `Network` tab and adjust if needed.
    
    // cy.get('select[class=]').select('IPA') add classList to dropdowns
    // cy.get('select[class=]').select('Littleton') add classList to dropdowns
    // cy.get('select[class=]').select('5') add classList to dropdowns
    // cy.get('button).click()
  })

  it('has predictable user view on page render', () => {
    cy.get('h1[class=malt]').contains('Malt')
    cy.get('button').contains('Show')=
  })
})

describe('Breweries Page', () => {
  beforeEach(() => {
    // cy.visit(http://localhost:3000/maltfinder/search/:breweryLocations)
  })
})

describe('Single Brewery Listing Page', () => {
  beforeEach(()=> {
    // cy.visit(http://localhost:3000/maltfinder/search/:breweryLocations:selectedBrewery)
  })
})

describe('Error Message Page', () => {
  cy.visit('http://localhost:3000/maltf')
  cy.get('h2').contains('Party')
})