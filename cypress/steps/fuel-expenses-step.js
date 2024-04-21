import GeneralStep from '../steps/general-step.js';
import FuelExpenses from '../pages/FuelExpenses.js';
export class FuelExpenses extends GeneralStep {
    addAnExpenses(car) {
        FuelExpenses.addAnExpenseButton.click()
        FuelExpenses.numberOfLitersField.type('125')
        FuelExpenses.totalCostField.type('274')
        FuelExpenses.addButton.click()
    }
}

export const fuelExpenses = new FuelExpenses();