describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://yourl.co.uk')
    cy.get('.elementor-element-f12b3fc > .elementor-widget-container > a > .attachment-large')
  })
})