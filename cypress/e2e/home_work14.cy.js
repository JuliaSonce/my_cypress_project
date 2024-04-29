
/// <reference types="cypress" />
import { basePage } from '../pages/BasePage.js';
import { GaragePage } from '../pages/GaragePage.js';
import { User } from '../models/User.js';
import { generalStep } from '../steps/general-step.js';

describe('Mock up creating car via interception ', () => {
  // beforeEach(() => {
  //   cy.visit('/');
  //   cy.fixture('defaultUser.json').then((userFixtureLoadedFromJson) => {
  //     cy.LoginViaAPI(userFixtureLoadedFromJson.email, userFixtureLoadedFromJson.password);
  //     cy.visit('/panel/garage');
  //   })
  // })


  it('Login via UI', () => {
    cy.visit('/');
    cy.LoginViaUI("TestTestowichyou@gmail.com", "TestTest123!")
    cy.saveLocalStorage();
    cy.restoreLocalStorage();


  })



  it('Login via API', () => {
    cy.LoginViaAPI(userFixtureLoadedFromJson.email, userFixtureLoadedFromJson.password);
    cy.visit('/panel/garage');
    cy.fixture('carsResponseData.json').then((carFixtureLoadedFromJson) => {
      cy.intercept('GET', '/api/cars', (interceptedRequest) => {
        interceptedRequest.reply(carFixtureLoadedFromJson)
      }).as('carsCreationIntercept');
    })



    //   cy.visit('/');
    //   cy.fixture('defaultUser.json').then((userFixtureLoadedFromJson) => {
    //     cy.LoginViaAPI(userFixtureLoadedFromJson.email, userFixtureLoadedFromJson.password);
    //     cy.visit('/panel/garage');
    //   })

    //   cy.wait('@carsCreationIntercept');
    //   cy.get('.car_name.h2').should('exist')


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

