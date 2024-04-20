export default class HomePage {
    static get logout() {
        return cy.get('.sidebar > .btn-link', {timeout:10000})
    }
    

}

export const homePage = new HomePage();