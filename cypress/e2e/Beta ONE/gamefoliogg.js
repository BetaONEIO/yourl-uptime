describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('www.gamefolio.gg')
    cy.url().should('include', 'gamefoliocom');
    //tests that gamefolio.gg redirects to gamefolio.com
  })
})