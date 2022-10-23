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

describe('Malt Form Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/maltfinder')
  })

  it('should display predicatble info and have usable drop downs', () => {
    cy.get('select[class=beer-style]').select('Amber').should('have.value', 'Amber')
    cy.get('select[class=city]').select('Denver').should('have.value', 'Denver, CO')
    cy.get('select[class=radius]').select('50').should('have.value', '50')
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3000/search')
  })
})

describe('Loading view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/search')
  })

  it('should display a loading message', () => {
    cy.get('p').contains('ferment')
  })
})

// we need to create a conditional render for queries that reuturn NO matches and send the user 
// back to the search form!

describe('Bad URL Message Page', () => {
  it('should display the error message page with a bad URL given', () => {
    cy.visit('http://localhost:3000/maltf')
    cy.get('h2').contains('Party')
  })
})


// describe('Malt Matcher Page', () => {
//   beforeEach(() => {
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
  // })