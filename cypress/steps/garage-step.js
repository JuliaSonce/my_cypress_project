
import GeneralStep from '../steps/general-step.js';
import { GaragePage } from '../pages/GaragePage.js';
export class GarageStep extends GeneralStep {
    addNewCar(car) {
        GaragePage.addCarButton.click();
        GaragePage.carBrand.select(car.brand);
        GaragePage.carModel.select(car.model);
        GaragePage.mileage.type(car.mileage);
        GaragePage.saveButton.click()
    }

    validateAddedCar(car) {
        GaragePage.cardNameOfAddedCar.should('contain.text', car.brand + ' ' + car.model);
        GaragePage.cardMileageOfAddedCar.should('have.value', car.mileage);
    }

    deleteAddedCar() {
        GaragePage.cardEditButton.click();
        GaragePage.removeCarDialogButton.click();
        GaragePage.removeCarConfirmationButton.click();
    }

    validateIfNoCars() {
        GaragePage.addedCarCard.should('not.exist');
    }

    addAnExpense(day, month, year) {
        GaragePage.addFuelExpenseButton.eq(0).click();
        GaragePage.dataPickerButton.click();


    }
}

export const garageStep = new GarageStep();
