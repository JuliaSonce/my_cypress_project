/// <reference types="cypress" />
import { randomEmail } from './random_email_generator.js';
const password =  "3InMrL5cJLf5P7Q"
const baseUrl = "qauto2.forstudy.space/";
const name = "Julia";
const lastName = "Nachbarn";

describe('Test qaauto Sign in', () => {
    it('Test Sign up form', () => {
      cy.visit(`https://guest:welcome2qauto@${baseUrl}`);
      cy.get('button').contains('Sign up').click();
      cy.get('input#signupName').type(name).should('have.value','Julia');
      cy.get('input#signupLastName').type(lastName).should('have.value','Nachbarn');
      cy.get('input#signupEmail').type(randomEmail());
      cy.get('input#signupPassword').type(password);
      cy.get('input#signupRepeatPassword').type(password);
      cy.get('button').contains('Register').click();
      cy.contains('Registration complete').should('exist')
      cy.wait(3000)
      cy.contains('Registration complete').should('not.exist')

    })
  })