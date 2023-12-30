describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('www.gamefolio.com/')
    cy.url().should('include', 'https');
  })
})