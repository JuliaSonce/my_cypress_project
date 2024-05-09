import { basePage } from '../pages/BasePage.js';
import { User } from '../models/User.js';
import HomePage from '../pages/HomePage.js';
import { GaragePage } from '../pages/GaragePage.js';

export default class GeneralStep {
    login(email, password) {
        basePage.signInButton().click();
        basePage.signInEmailInput().type(email);
        basePage.signInPasswordInput().type(password);
        basePage.loginButton().click();
    }

    verifyUserIsLoggedIn() {
        HomePage.logoutButton.should('be.visible');
    }

    loginValidRegisteredUser() {
        let validRegisteredUser = User.validRegisteredUser();
        this.login(validRegisteredUser.email, validRegisteredUser.password);
    }
}

export const generalStep = new GeneralStep();
