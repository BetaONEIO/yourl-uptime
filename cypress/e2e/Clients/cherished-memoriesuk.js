describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('https://cherished-memories.uk/')
    cy.url().should('include', 'https');
    cy.get('.elementor-element-f12b3fc > .elementor-widget-container > a > .attachment-large')
  })
})