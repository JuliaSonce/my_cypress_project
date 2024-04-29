// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { basePage } from "../pages/BasePage";
import { User } from "../models/User";

Cypress.Commands.add('LoginViaUI', (email, password) => {
    basePage.signInButton().click();
    basePage.signInEmailInput().type(email);
    basePage.signInPasswordInput().type(password);
    basePage.loginButton().click();
});

Cypress.Commands.add('saveLocalStorage', () => {
    cy.wrap(localStorage).as('localStorage');
    cy.log(localStorage);
});

Cypress.Commands.add('restoreLocalStorage', () => {
    cy.get('@localStorage').then(data => {
        localStorage.clear();
        for (key in data) {
            cy.log(data[key]);
            localStorage.setItem(key, data[key]);
        }
    })
});

Cypress.Commands.add('LoginViaAPI', (email, password, remember = false) => {
    cy.request({
        method: 'POST',
        url: 'https://qauto2.forstudy.space/api/auth/signin',
        body: {
            "email": email,
            "password": password,
            "remember": false
        }
    }).then(response => {
        expect(response.status).to.eq(200);
        cy.log(response.body);
        //return cy.wrap(response.body).as('loginResponseData');
        return cy.wrap(response.body.data.userId).as('userID')

    });

});


