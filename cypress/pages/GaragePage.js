export default class GaragePaage {
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

}