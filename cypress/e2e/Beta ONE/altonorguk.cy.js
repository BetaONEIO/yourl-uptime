describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('www.alovetowardourneighbour.org.uk/')
    //checks the url redirects to https://
    cy.url().should('include', 'https://');
  })
})



