/// <reference types="cypress" />

describe('Tests for contact list component', () => {
  beforeEach(() => cy.visit('https://agenda-contatos-react.vercel.app/'))

  it('Must add a new contact', () => {
    cy.get('input[placeholder="Nome"]').type('Gabriela')
    cy.get('input[placeholder="E-mail"]').type('teste@teste.com')
    cy.get('input[placeholder="Telefone"]').type('999999999')
    cy.get('.adicionar').click()
    cy.get('.contato').should('have.length', 4)
  })

  it('Must edit an exist contact', () => {
    cy.get('.edit').first().click()
    cy.get('input[placeholder="Nome"]').clear()
    cy.get('input[placeholder="Nome"]').type('Teste')
    cy.get('input[placeholder="E-mail"]').clear()
    cy.get('input[placeholder="E-mail"]').type('outro@teste.com')
    cy.get('input[placeholder="Telefone"]').clear()
    cy.get('input[placeholder="Telefone"]').type('999888888')
    cy.get('.alterar').click()
    cy.get('ul li').first().should('contain.text', 'Teste')
  })

  it('Must delete an exist contact', () => {
    cy.get('.delete').last().click()
    cy.get('input[placeholder="Nome"]').type('Teste')
  })
})