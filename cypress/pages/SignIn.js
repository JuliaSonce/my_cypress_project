import { startPageLocators } from "./BasePageLocators";
import { User } from "../models/User"
const baseUrl = "qauto2.forstudy.space/";
const signUpValidPage = `${baseUrl}panel/garage`
export function signUpForm(user) {
    startPageLocators.signUpName().type(user.name).should('have.value', user.name);
    startPageLocators.signupLastName().type(user.lastName).should('have.value', user.lastName);
    startPageLocators.signupEmail().type(user.email).should('have.value', user.email);
    startPageLocators.signupPassword().type(user.password).should('have.value', user.password);
    startPageLocators.signupRepeatPassword().type(user.password).should('have.value', user.password);
    startPageLocators.registerButton().contains('Register').click();
}

export function validateSignUp() {
    cy.url().should('contain', signUpValidPage)
}