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
    static get datePickerButton() {
        return cy.get('.input-group-append > .btn > .icon')
    }
    static get removeCarDialogButton() {
        return cy.xpath(`//ngb-modal-window[@role='dialog']/div[@role='document']//app-edit-car-modal/div[3]/button[@type='button']`);
    }
    static get removeCarConfirmationButton() {
        return cy.xpath(`//ngb-modal-window[@role='dialog']/div[@role='document']//app-remove-car-modal/div[3]/button[2]`);
    }
    static get addedCarCard() {
        return cy.xpath(`//body/app-root/app-global-layout/div[@class='global-layout']/div[@class='app-wrapper']/div[@class='app-content']/app-panel-layout//app-garage//ul[@class='car-list']//app-car/div[@class='car jumbotron']`);
    }
    static get cardNameOfAddedCar() {
        return cy.get('.car-group > .car_name')
    }
    static get cardCarLogo() {
        return cy.get('.car-logo_img')
    }
    static get cardCarLogo() {
        return cy.get('.car-logo_img')
    }
    static get cardDateMileageOfAddedCar() {
        return cy.get('.car-body > .car_update-mileage')
    }
    static get cardMileageOfAddedCar() {
        return cy.get(`li:nth-of-type(1) > app-car app-update-mileage-form > .ng-pristine.ng-untouched.ng-valid.update-mileage-form > input[name='miles']`)
    }
    static get cardUpdateButton() {
        return cy.get('.update-mileage-form > .btn.btn-secondary.btn-sm.update-mileage-form_submit')
    }
    static get cardEditButton() {
        return cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_edit > .icon')
    }


    static mainProfileContainer() {
        return cy.get('.main')
    }

    static validateUserName() {
        // We are using valid unregistered user, as we want to test just signed up user
        const user = User.validRegisteredUser;
        const userFullName = `${user.name} ${user.lastName}`;
        cy.visit(this.profilePageUrl)
        this.mainProfileContainer().should('contain', userFullName);
    }
}