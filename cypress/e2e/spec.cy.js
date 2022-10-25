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

describe('Data stub', () => {
  it('should hit the API',() => {

    cy.visit('http://localhost:3000/maltfinder')
    cy.get('select[class=beer-style]').select('Lager')
    cy.get('select[class=city]').select('Denver')
    cy.get('select[class=radius]').select('50')
    cy.intercept('POST', 'https://malt-matchers-be.herokuapp.com/graphql', (req) => {
      if(req.body.operationName === 'breweries'){
        req.alias = 'breweries'
        req.continue()
      }
    })
    cy.get('button').click()
    cy.wait('@breweries')    
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
    cy.get('select[class=radius]').select('50')
    cy.get('button').click()
    // cy.wait(5000)
  })

  it('display matching breweries', () => {
    cy.get('.single-brewery-container').eq(0).contains('Denver Beer Company')
    cy.get('.single-brewery-container').eq(1).contains('Copper')
    cy.get('.single-brewery-container').eq(2).contains('Denver')
  })

  it.skip('takes the user to a social media page of the brewery if you click on it', () => {
    cy.get('.instagramAnchor').eq(0).click()
    // cy.url().should('eq', 'https://www.instagram.com/denverbeerco/')
  })

  it('takes the user to the brewery\'s tap listings if you click on the tap listing button', () => {
    cy.get('button').eq(0).click()
    cy.url().should('eq', 'http://localhost:3000/search/Denver%20-%20Denver%20Beer%20Company')
  })
})

describe('brewery tap list page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/maltfinder')
    cy.get('select[class=beer-style]').select('Lager')
    cy.get('select[class=city]').select('Denver')
    cy.get('select[class=radius]').select('50')
    cy.get('button').click()
    // cy.wait(5000)
    cy.get('button').eq(0).click()
  })

  it('should display those yummy brewskis', () => {
    cy.get('.single-beer-container').eq(0).should('contain', 'Blood Orange')
  }) 

})

describe('user\'s taste is too narrow for the provided options (sad path)', () => {
  it('should display text prompting hte user their taste is too picky' , () => {
    cy.visit('http://localhost:3000/maltfinder')
    cy.get('select[class=beer-style]').select('Saison')
    cy.get('select[class=city]').select('Pueblo')
    cy.get('select[class=radius]').select('5')
    cy.get('button').click()
    cy.get('p').should('contain', 'No results matched your search!')
  })
})

describe('directions to brewery', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000/maltfinder')
    cy.get('select[class=beer-style]').select('Lager')
    cy.get('select[class=city]').select('Denver')
    cy.get('select[class=radius]').select('50')
    cy.get('button').click()
    cy.get('button[class=show-beers-button]').eq(0).click()
    cy.get('button[class=brewery-details-button]').click()
  })

  it.skip('should display the map!', () => {
  //not sure how to stub the api for google here
  })
})

describe('home button', () => {

  it('takes user home from malt finder page', () =>{
    cy.visit('http://localhost:3000/maltfinder')
    cy.get('h1[class=malt]').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('takes user home from search page', () => {
    cy.visit('http://localhost:3000/maltfinder')
    cy.get('select[class=beer-style]').select('Lager')
    cy.get('select[class=city]').select('Denver')
    cy.get('select[class=radius]').select('50')
    cy.get('button').click()
    cy.get('h1[class=malt]').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('takes user home from tap list page', () => {
    cy.visit('http://localhost:3000/maltfinder')
    cy.get('select[class=beer-style]').select('Lager')
    cy.get('select[class=city]').select('Denver')
    cy.get('select[class=radius]').select('50')
    cy.get('button').click()
    cy.get('p[class=brewery-distance]').eq(0).click()
    cy.get('h1[class=malt]').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('takes user home from directions page', () => {
    cy.visit('http://localhost:3000/maltfinder')
    cy.get('select[class=beer-style]').select('Lager')
    cy.get('select[class=city]').select('Denver')
    cy.get('select[class=radius]').select('50')
    cy.get('button').click()
    cy.get('button[class=show-beers-button]').eq(0).click()
    cy.get('button[class=brewery-details-button]').click()
    cy.get('h1[class=malt]').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})

describe('about us', () => {
  beforeEach(()=> {
    cy.viewport(2000, 2000)
    cy.visit('http://localhost:3000/')
    cy.contains('About').click()
  })

  it('should populate a welcome text overview', () => {
    cy.get('.about-text').should('contain', 'brain-child')
  })

  it('should display images of the team with names', () => {
    cy.get('p[class=name]').eq(1).should('contain', 'Bryan Shears')
  })
})