import GeneralStep from '../steps/general-step.js';
import FuelExpenses from '../pages/FuelExpenses.js';
import { formatDate } from '../e2e/utils.js'
import HomePage from '../pages/HomePage.js';

export class FuelExpensesSteps extends GeneralStep {
    addAnExpenses(expenses) {
        FuelExpenses.addAnExpenseButton.click();

        FuelExpenses.reportDateField.clear()
        FuelExpenses.reportDateField.type(formatDate(new Date()))

        FuelExpenses.mileageField.clear();
        FuelExpenses.mileageField.type(expenses.mileage);

        FuelExpenses.numberOfLitersField.type(expenses.liters);
        FuelExpenses.totalCostField.type(expenses.totalCost);

        FuelExpenses.addButton.click()
    }

    validateAddedExpenses() {
        FuelExpenses.expensesTable.should('exist');
    }

    navigateToExpenses() {
        HomePage.sidebarFuelExpensesMenu().click();
    }

    navigateToGarage() {
        HomePage.sidebarGarageMenu().click();
    }

    deleteExpenses() {
        FuelExpenses.deleteExpensesButton.click({ force: true });
        FuelExpenses.deleteExpensesConfirmationButton.click();
    }

    validateExpensesTableNotExist() {
        FuelExpenses.expensesTable.should('not.exist');
    }

}

export const fuelExpensesSteps = new FuelExpensesSteps();