/// <reference types="cypress" />
import { basePageLocators } from '../pages/BasePageLocators.js';
import { garagePageLocators } from '../pages/GaragePageLocator.js';
import {User} from '../models/User.js';

describe('Test qaauto Sign in', () => {
    it('Test Sign up form', () => {
       cy.visit(`/`); 
      basePageLocators.signUpButton().should('exist').click();
      basePageLocators.signUpForm(User.validUser());
      basePageLocators.validateSignUp();
      garagePageLocators.validateUserName();
    })
  })