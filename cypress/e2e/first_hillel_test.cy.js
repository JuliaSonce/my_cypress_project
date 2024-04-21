/// <reference types="cypress" />
import { BasePageLocators } from '../pages/BasePageLocators.js';
import { signUpForm } from '../pages/SignUp.js';
import { validateSignUp } from '../pages/SignUp.js';
import { validateUserName } from '../pages/UserProfile.js';
import { User } from '../models/User.js';
const basePageLocators = new BasePageLocators()


describe('Test qaauto Sign in', () => {
  it('Test Sign up form', () => {
    cy.visit(`/`);
    basePageLocators.signUpButton().should('exist').click();
    signUpForm(User.validUnregisteredUser());
    validateSignUp();
    validateUserName();
  })
})