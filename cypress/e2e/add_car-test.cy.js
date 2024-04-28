/// <reference types="cypress" />
import { basePage } from '../pages/BasePage.js';
import { generalStep } from '../steps/general-step.js';
import { homePage } from '../pages/HomePage.js';
import { User } from '../models/User.js';
import { garageStep } from '../steps/garage-step.js';

const car = {
    brand: "BMW",
    model: "X5",
    mileage: "200"
}

describe('Test adding car functionality', () => {
    beforeEach(() => {
        cy.visit(`/`);
        generalStep.loginValidRegisteredUser();
        generalStep.verifyUserIsLoggedIn();
    })

    it('Add new car to user garage', () => {
        garageStep.addNewCar(car);
        garageStep.validateAddedCar(car);
    })

    it('Delete added car', () => {
        garageStep.deleteAddedCar(car);
        garageStep.validateIfNoCars();
    })
})