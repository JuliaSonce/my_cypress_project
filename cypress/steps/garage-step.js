import GaragePaage from '../pages/GaragePage.js';
import { GeneralStep } from './general-step.js';

export class GarageStep extends GeneralStep {
    addNewCar(car){
        GaragePaage.addCarButton.click();
        GaragePaage.carBrand.select();
        GaragePaage.carModal.select();
        GaragePaage.mileage.type();
        GaragePaage.addButton.click()


    }
}

export const garageStep = new GarageStep();
