
import GeneralStep from '../steps/general-step.js';
import GaragePaage from '../pages/GaragePage.js';
export class GarageStep extends GeneralStep {
    addNewCar(car) {
        GaragePaage.addCarButton.click();
        GaragePaage.carBrand.select(car.brand);
        GaragePaage.carModel.select(car.modal);
        GaragePaage.mileage.type(car.mileage);
        GaragePaage.saveButton.click()
    }
    validateAddetCar(brand, modal, mileage) {
        GaragePaage.CardNameOfAdditCar.should('contain.text', brand + ' ' + model);
        GaragePaage.CardMileageOfAddedCar.should('contain.text', mileage)
    }
    deleteAddidCar() {
        GaragePaage.additCarCard.eq(0).addCarButton.click();
        GaragePaage.deleteAddidCar.click()
    }

    addAnExpense(day, month, year) {
        GaragePaage.addFuelExpenseButton.eq(0).click();
        GaragePaage.dataPickerButton.click();
        this.datePicker(day, month, year)

    }
}

export const garageStep = new GarageStep();
