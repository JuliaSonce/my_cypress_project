/// <reference types="cypress" />
import { basePage } from '../pages/BasePage.js';
import { GaragePage } from '../pages/GaragePage.js';
import { User } from '../models/User.js';

describe('Test qaauto Sign in', () => {
  it('Test Sign up form', () => {
    const userToRegister = User.validUnregisteredUser();
    cy.visit(Cypress.env('baseUrl'));
    //cy.visit(`/`);
    basePage.signUpButton().should('exist').click();
    basePage.signUpForm(userToRegister);
    basePage.validateSignUp();
    GaragePage.validateUserName(userToRegister);
  })
})



