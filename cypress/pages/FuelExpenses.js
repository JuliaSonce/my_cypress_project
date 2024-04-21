export default class FuelExpenses {
    static get carSelectDropdown() {
        return cy.xpath(`/html//button[@id='carSelectDropdown']`);
    };
    static get addAnExpenseButton() {
        return cy.xpath(`//body/app-root/app-global-layout/div[@class='global - layout']/div[@class='app - wrapper']/div[@class='app - content']/app-panel-layout//app-fuel-expenses//button[@class='btn btn - primary']`)
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
}