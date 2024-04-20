/// <reference types="cypress" />
import { BasePageLocators } from '../pages/BasePageLocators.js';
import { generalStep } from '../steps/general-step.js';
import { homePage } from '../pages/HomePage.js';
import {User} from '../models/User.js';
const basePageLocators = new BasePageLocators()


describe('Check if it possible to add new car', () => {
     beforeEach(() => {
        cy.visit(`/`);
        generalStep.loginValifRegisteredUser();
        generalStep.verifyLoginButtonIsVisible();

     })
    it('Add new car ', () => {
        cy.visit(`/`);
        
    })
  })