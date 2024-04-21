import { startPageLocators } from '../pages/BasePage.js';
import { User } from '../models/User.js';
import HomePage from '../pages/HomePage.js';
import GaragePaage from '../pages/GaragePage.js';

export default class GeneralStep {
    login(email, password) {
        startPageLocators.signInButton().click();
        startPageLocators.signInEmailInput().type(email);
        startPageLocators.signInPasswordInput().type(password);
        startPageLocators.signInPassworLoginButton().click();
    }

    verifyLoginButtonIsVisible() {
        HomePage.logoutButton.should('be.visible');
    }

    loginValidRegisteredUser() {
        let validRegistereUser = User.validRegisteredUser();
        this.login(validRegistereUser.email, validRegistereUser.password);
    }


    // datePicker(day, month, year) {
    //     cy.get('select[title="Select month"]').select(month);
    //     cy.get('select[title="Select year"]').select(year);

    // }
}

export const generalStep = new GeneralStep();
