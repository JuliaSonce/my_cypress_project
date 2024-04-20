import {startPageLocators } from '../pages/BasePageLocators.js';
import {User} from '../models/User.js';
import HomePage from '../pages/HomePage.js';
export class GeneralStep {
    login(email, password){
        startPageLocators. signInButton().click();
        startPageLocators.signInEmailInput().type(email);
        startPageLocators.signInPasswordInput().type(password);
        startPageLocators.signInPassworLoginButton().click();
    }

     verifyLoginButtonIsVisible() {
        HomePage.logout.should('be.visible');
     }

    loginValifRegisteredUser() {
        let validRegistereUser = User.validRegisteredUser();
        this.login(validRegistereUser.email, validRegistereUser.password);
    }
}

export const generalStep = new GeneralStep();
