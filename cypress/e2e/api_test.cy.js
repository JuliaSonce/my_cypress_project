/// <reference types="cypress" />
import { User } from '../models/User.js';
import { garageStep } from '../steps/garage-step.js';
import { generalStep } from '../steps/general-step.js';
const car = {
    brand: "BMW",
    model: "X5",
    mileage: "200"
}
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

describe('Api test', () => {
    before(() => {
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

    it('Add and check car', () => {
        generalStep.login(randomUser.email, randomUser.password);
        generalStep.verifyUserIsLoggedIn();
        garageStep.addNewCar(car);
        garageStep.validateAddedCar(car);

        cy.request(makeGetAllCarsRequestData()).then((response) => {
            expect(response.status).to.eq(200);
            expect(car.brand).to.equal(response.body.data[0].brand);
            expect(car.model).to.equal(response.body.data[0].model);
        });
    })

});