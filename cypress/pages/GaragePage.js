import { User } from "../models/User";

export class GaragePage {
    static baseUrl = "https://guest:welcome2qauto@qauto2.forstudy.space/";
    static profilePageUrl = `${this.baseUrl}panel/profile`
    static get addCarButton() {
        return cy.get('.panel-page_heading > .btn');
    };
    static get carBrand() {
        return cy.get('#addCarBrand');
    };
    static get carModel() {
        return cy.get('select#addCarModel', { timeout: 10000 })
    };
    static get mileage() {
        return cy.get('#addCarMileage')
    };
    static get saveButton() {
        return cy.get('app-add-car-modal  .btn.btn-primary')
    };
    static get cancelButton() {
        return cy.get('.btn.btn-secondary')
    };
    static get addFuelExpenseButton() {
        return cy.get('.btn.btn-success.car_add-expense')
    };
    static get dataPickerButton() {
        return cy.get('.input-group-append > .btn > .icon')
    }
    static get removeCarButton() {
        return cy.get('.btn.btn-outline-danger')
    }
    static get additCarCard() {
        return cy.get('.car-list .car-item:nth-of-type(1) .jumbotron')
    }
    static get CardNameOfAdditCar() {
        return cy.get('.car-group > .car_name')
    }
    static get CardCarLogo() {
        return cy.get('.car-logo_img')
    }
    static get CardCarLogo() {
        return cy.get('.car-logo_img')
    }
    static get CardDateMileageOfAddedCar() {
        return cy.get('.car-body > .car_update-mileage')
    }
    static get CardMileageOfAddedCar() {
        return cy.get('.car-list .car-item:nth-of-type(4) .update-mileage-form_input')
    }
    static get CardUpdateButton() {
        return cy.get('.update-mileage-form > .btn.btn-secondary.btn-sm.update-mileage-form_submit')
    }

    static mainProfieContainer() {
        return cy.get('.main')
    }

    static validateUserName() {
        // We are using valid unregistered user, as we want to test just signed up user
        const user = User.validRegisteredUser;
        const userFullName = `${user.name} ${user.lastName}`;
        cy.visit(this.profilePageUrl)
        this.mainProfieContainer().should('contain', userFullName);
    }
}