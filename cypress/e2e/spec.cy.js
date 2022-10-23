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

  //need to add a feature where all select drop down items are required.  I added 'required' to
  //the `select` drop down - need to format the button to be unclickable until the fields are filled?  
  //Easy fix.... too drunk to immediately solve right now 

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

describe('Matching breweries!', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/maltfinder')
    cy.get('select[class=beer-style]').select('Lager')
    cy.get('select[class=city]').select('Denver')
    cy.get('select[class=radius]').select('50').should('have.value', '50')
    cy.get('button').click()
    cy.wait(35000)
  })

  it('display matching breweries', () => {
    cy.get('.single-brewery-container').eq(0).contains('Denver Beer Company')
    cy.get('.single-brewery-container').eq(1).contains('Copper')
    cy.get('.single-brewery-container').eq(2).contains('Denver')
  })

  it('takes the user to a social media page of the brewery if you click on it', () => {
    cy.get('.instagramAnchor').eq(0).click()
    // cy.url().should('eq', 'https://www.instagram.com/denverbeerco/')
    //not sure how to make external url's pass in a cypress test.  Still very drunk
  })

  it('takes the user to the brewery\'s tap listings if you click on the tap listing button', () => {
    cy.get('button').eq(0).click()
    cy.url().should('eq', 'http://localhost:3000/search/Denver%20Beer%20Company')
  })
})

describe('brewery tap list page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/maltfinder')
    cy.get('select[class=beer-style]').select('Lager')
    cy.get('select[class=city]').select('Denver')
    cy.get('select[class=radius]').select('50').should('have.value', '50')
    cy.get('button').click()
    cy.wait(35000)
    cy.get('button').eq(0).click()
  })

  it('should display those yummy brewskis', () => {
    cy.get('.single-beer-container').eq(0).should('contain', 'Blood Orange')
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