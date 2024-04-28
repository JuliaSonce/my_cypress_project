
/// <reference types="cypress" />
import { basePage } from '../pages/BasePage.js';
import { GaragePage } from '../pages/GaragePage.js';
import { User } from '../models/User.js';
import { generalStep } from '../steps/general-step.js';

describe('Test Suite', () => {
  //it('Login via UI', () => {
  //cy.visit('/');
  //cy.LoginViaUI("TestTestowichyou@gmail.com", "TestTest123!")
  //cy.saveLocalStorage();
  //cy.restoreLocalStorage();


  //})

  it('Login via API', () => {
    cy.visit('/');
    cy.fixture('defaultUser.json').then((user) => {

      cy.LoginViaAPI(user.email, user.password);
      cy.visit('/panel/garage');
    })

    cy.fixture('carsResponseData.json').then((cars) => {
      cy.intercept('GET', '/api/cars', (req) => {
        req.reply(cars)
      }).as('cars');
    })
    cy.wait('@cars');
    cy.get('.car_name.h2').should('exist')


  })








  //cy.LoginViaAPI("TestTestowichyou@gmail.com", "TestTest123!");
  //cy.get('@loginResponseData').then(loginResponseData => {
  //cy.log(loginResponseData)
  //   cy.get('@userID').then(userID => {
  //     cy.log(userID)
  //   })
  //   cy.visit('/panel/garage');
  // })


})