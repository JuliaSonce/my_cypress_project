/// <reference types="cypress" />
import { generalStep } from '../steps/general-step.js';
import { garageStep } from '../steps/garage-step.js';
import { fuelExpensesSteps } from '../steps/fuel-expenses-step.js'

const car = {
  brand: "BMW",
  model: "X5",
  mileage: "200"
}

const carExpenses = {
  liters: "125",
  totalCost: "358",
  mileage: "400"
}

describe('Test adding car expenses', () => {
  beforeEach(() => {
    cy.visit(`/`);
    generalStep.loginValidRegisteredUser();
    generalStep.verifyUserIsLoggedIn();
  })

  it('Add expenses to car', () => {
    garageStep.addNewCar(car);
    garageStep.validateAddedCar(car);
    fuelExpensesSteps.addAnExpenses(carExpenses);
    fuelExpensesSteps.validateAddedExpenses();
  })

  it('Remove expenses from car', () => {
    fuelExpensesSteps.navigateToExpenses();
    fuelExpensesSteps.deleteExpenses();
    fuelExpensesSteps.validateExpensesTableNotExist();
    fuelExpensesSteps.navigateToGarage();
    garageStep.deleteAddedCar();
  })

})