describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('www.everclean-services.co.uk')
    cy.url().should('include', 'https');
    // became client 18th Feb 2023
  })
})