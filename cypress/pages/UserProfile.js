import {startPageLocators} from "./BasePageLocators";
import {User} from "../models/User";
import { garagePageLocators} from "./GaragePageLocator";
const baseUrl = "https://guest:welcome2qauto@qauto2.forstudy.space/";
const profilePageUrl = `${baseUrl}panel/profile`

export function validateUserName() {
    const user = User.validUser();
    const userFullName = `${user.name} ${user.lastName}`;
    cy.visit(profilePageUrl)
    garagePageLocators.mainProfieContainer().should('contain', userFullName);
}

