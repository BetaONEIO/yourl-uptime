const { Pause } = require("wd/lib/special-keys");

describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('www.thecryptowiki.io/')
    cy.url().should('include', 'https');
  })
})