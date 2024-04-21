/// <reference types="cypress" />
import { basePage } from '../pages/BasePage.js';
import { GaragePage } from '../pages/GaragePage.js';
import { User } from '../models/User.js';

describe('Test qaauto Sign in', () => {
  it('Test Sign up form', () => {
    cy.visit(`/`);
    basePage.signUpButton().should('exist').click();
    basePage.signUpForm(User.validUnregisteredUser());
    basePage.validateSignUp();
    GaragePage.validateUserName();
  })
})
