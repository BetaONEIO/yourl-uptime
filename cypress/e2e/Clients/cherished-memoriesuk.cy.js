describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('https://www.cherished-memories.uk/')
    cy.url().should('include', 'https');
  })
})