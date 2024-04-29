/// <reference types="cypress" />
import { User } from '../models/User.js';
import { fuelExpensesSteps } from '../steps/fuel-expenses-step.js';
import { garageStep } from '../steps/garage-step.js';
import { generalStep } from '../steps/general-step.js';
import { requestedFormattedDate } from './utils.js';
const car = {
    brand: "BMW",
    model: "X5",
    mileage: "200"
}

// const carExp = {
//     reportedAt: requestedFormattedDate(new Date()),
//     mileage: 250,
//     liters: 45,
//     totalCost: 90
// }

let carExp
let randomUser = undefined;

function makeGetAllCarsRequestData() {
    const requestData = {
        method: 'GET',
        url: 'api/cars',
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        }
    }

    return requestData;
}

function makeSignupRequestData(user) {
    const requestData = {
        method: 'POST',
        url: 'api/auth/signup',
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: {
            "name": user.name,
            "lastName": user.lastName,
            "email": user.email,
            "password": user.password,
            "repeatPassword": user.password
        }
    }

    return requestData;
}

function makeAddExpensesRequestData(carId, mileage, liters, totalCost) {
    const requestData = {
        method: 'POST',
        url: 'api/expenses',
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: {
            "carId": carId,
            "reportedAt": requestedFormattedDate(new Date()),
            "mileage": mileage,
            "liters": liters,
            "totalCost": totalCost,
            "forceMileage": true
        }
    }

    return requestData;

}

describe('Api test', () => {
    before(() => {
        cy.fixture("carExpenses.json").then((carData) => {
            carExp = carData
        })
        randomUser = User.validUnregisteredUser()
    })

    beforeEach(() => {
        cy.visit(`/`);
    });

    it('Signup via API', () => {
        cy.request(makeSignupRequestData(randomUser)).then((response) => {
            expect(response.status).to.eq(201)
            generalStep.login(randomUser.email, randomUser.password);
            generalStep.verifyUserIsLoggedIn();
        })
    })


    let createdCarId = undefined;

    it('Add and check car', () => {
        cy.intercept('POST', '/api/cars').as('carsCreationIntercept');

        generalStep.login(randomUser.email, randomUser.password);
        generalStep.verifyUserIsLoggedIn();
        garageStep.addNewCar(car);
        garageStep.validateAddedCar(car);

        //Validate created car via intercept
        cy.wait('@carsCreationIntercept').then((interception) => {
            expect(interception.response.statusCode).to.eq(201)
            createdCarId = interception.response.body.data.id;
        })

        // Test validate created car via API request
        cy.request(makeGetAllCarsRequestData()).then((response) => {
            expect(response.status).to.eq(200);

            let ourCar = undefined
            response.body.data.forEach(function (carFromGarage, index) {
                if (carFromGarage.id == createdCarId) {
                    ourCar = carFromGarage
                }
            });

            cy.wrap(ourCar).should('not.be.undefined')
            expect(ourCar.brand).to.equal(car.brand);
            expect(ourCar.model).to.equal(car.model);

        });
    })

    it('Add expenses via API', () => {
        generalStep.login(randomUser.email, randomUser.password);
        generalStep.verifyUserIsLoggedIn();
        const requestData = makeAddExpensesRequestData(createdCarId, carExp.mileage, carExp.liters, carExp.totalCost);
        cy.log("============");
        cy.log(requestData);
        cy.request(requestData).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.carId).to.equal(createdCarId);
            expect(response.body.data.liters).to.equal(carExp.liters);
            expect(response.body.data.mileage).to.equal(carExp.mileage);
            expect(response.body.data.totalCost).to.equal(carExp.totalCost);
        })
    })

    it('Validate expenses created expenses', () => {
        generalStep.login(randomUser.email, randomUser.password);
        generalStep.verifyUserIsLoggedIn();
        fuelExpensesSteps.validateAddedExpensesData(carExp);
    })



});