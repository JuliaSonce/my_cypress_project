export default class GaragePaage {
    static get addCarButton() {
        return cy.get('.panel-page_heading > .btn');

    };

    static get carBrand() {
        return cy.get('#addCarBrand');
    }

    static get carModal() {
        return cy.get('#addCarModel')
    }
    static get mileage() {
        return cy.get('#addCarMileage')
        
    }
    static get addButton() {
        return cy.get('app-add-car-modal  .btn.btn-primary')
    }
    static get cancelButton() {
        return cy.get('.btn.btn-secondary')
    }
}