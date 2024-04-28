export default class HomePage {
    static headerNavContainer() {
        return cy.xpath(`//app-root/app-global-layout//app-header/header/div/div`);
    }
    static headerGarageMenu() {
        return cy.xpath(`//app-root/app-global-layout//app-header/header/div/div/div/nav/a[@href='/panel/garage']`);
    }
    static headerFuelExpensesMenu() {
        return cy.xpath(`//app-root/app-global-layout//app-header/header/div/div/div/nav/a[@href='/panel/expenses']`);
    }
    static headerInstructionsMenu() {
        return cy.xpath(`//app-root/app-global-layout//app-header/header/div/div/div/nav/a[@href='/panel/instructions']`);
    }
    static headerMyProfileDropdown() {
        return cy.xpath(`/html//button[@id='userNavDropdown']`);
    }
    static sidebarGarageMenu() {
        return cy.get(`cy.get('[routerlink="garage"]')`);
    }
    static sidebarFuelExpensesMenu() {
        return cy.get('[routerlink="expenses"]');
    }
    static sidebarInstructionsMenu() {
        return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']//app-panel-layout//div[@class='row']/div[1]/nav/a[@href='/panel/instructions']`);
    }
    static sidebarProfileMenu() {
        return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']//app-panel-layout//div[@class='row']/div[1]/nav/a[@href='/panel/instructions']`);
    }
    static sidebarSettingsMenu() {
        return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']/div[@class='app-wrapper']/div[@class='app-content']/app-panel-layout//nav//a[@href='/panel/settings']`);
    }
    static get logoutButton() {
        return cy.get(".sidebar > .btn.btn-link.btn-sidebar", { timeout: 10000 });
    }
    static addCarButtonGaragePage() {
        return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']/div[@class='app-wrapper']/div[@class='app-content']/app-panel-layout/div[@class='panel-layout']//app-garage//button[@class='btn btn-primary']`);
    }
    static footerTest() {
        return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']/app-footer//div[@class='container']/div/div[1]`);
    }
}

export const homePage = new HomePage();
