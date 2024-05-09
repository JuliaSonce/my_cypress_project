export default class FuelExpenses {
    static get carSelectDropdown() {
        return cy.xpath(`/html//button[@id='carSelectDropdown']`);
    };
    static get addAnExpenseButton() {
        return cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense');
    };
    static get vehicleFiled() {
        return cy.xpath(`/html//select[@id='addExpenseCar']`);
    };
    static get reportDateField() {
        return cy.xpath(`/html//input[@id='addExpenseDate']`);
    };
    static get datePicker() {
        return cy.xpath(`//body/ngb-modal-window[@role='dialog']/div[@role='document']//app-add-expense-modal//app-add-expense-form/form//button[@type='button']`);
    };
    static get mileageField() {
        return cy.xpath(`/html//input[@id='addExpenseMileage']`);
    };
    static get numberOfLitersField() {
        return cy.xpath(`/html//input[@id='addExpenseLiters']`);
    };
    static get totalCostField() {
        return cy.xpath(`/html//input[@id='addExpenseTotalCost']`);
    };
    static get addButton() {
        return cy.xpath(`//ngb-modal-window[@role='dialog']/div[@role='document']//app-add-expense-modal/div[3]/button[2]`);
    };
    static get cancelButton() {
        return cy.xpath(`//ngb-modal-window[@role='dialog']/div[@role='document']//app-add-expense-modal/div[3]/button[1]`);
    };
    static get closelButton() {
        return cy.xpath(`//ngb-modal-window[@role='dialog']/div[@role='document']//app-add-expense-modal/div[@class='modal-header']/button[@type='button']`);
    };
    static get expensesTable() {
        return cy.get('.expenses_table.table')
    };
    static get deleteExpensesButton() {
        return cy.get('.btn.btn-delete')
    };

    static get deleteExpensesConfirmationButton() {
        return cy.xpath(`//ngb-modal-window[@role='dialog']/div[@role='document']//app-delete-expense-modal/div[3]/button[2]`)
    };

    static get reportedDate() {
        return cy.get('tr > td:nth-of-type(1)');

    };
    static get mileage() {
        return cy.get('tr > td:nth-of-type(2)');
    };

    static get litersUsed() {
        return cy.get('tr > td:nth-of-type(3)');
    };

    static get totalCost() {
        return cy.get('tr > td:nth-of-type(4)');
    };



}