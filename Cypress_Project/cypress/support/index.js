// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************


// Alternatively you can use CommonJS syntax:
// require('./commands')
require('@percy/cypress')
require('cypress-xpath')
import './commands'
import '@percy/cypress';

/*beforeEach(() => {
    cy.window().then((win) => {
       cy.spy(win.console, "error").as('Error before')
       cy.spy(win.console, "warn").as('Warning before')
    })    
})

afterEach( () => {
  cy.window().then((win) => {
    cy.spy(win.console, "error").as('Error after')
    cy.spy(win.console, "warn").as('Warning after')
 })  
})*/