describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('www.cherished-memories.uk/')
    cy.url().should('include', 'https');
    // became client 1st Feb 2023
  })
})