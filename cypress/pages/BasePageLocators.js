export class BasePageLocators {
    
    baseUrl = "qauto2.forstudy.space/";
    signUpValidPage = `${this.baseUrl}panel/garage`
 signInButton() {
    return cy.xpath(`//button[@class="btn btn-outline-white header_signin"]`);
 }
 guestLoginButton() {
    return cy.xpath(`//button[@class='header-link -guest']`);
}

 signUpButton() {
    return cy.xpath(`//button[@class="hero-descriptor_btn btn btn-primary"]`);
}
 registrationForm() {
    return cy.xpath(`//div[@class="modal-content"]`);
}
 signUpName() {
    return cy.xpath(`//input[@id="signupName"]`);
}
signupLastName() {
    return cy.xpath(`//input[@id="signupLastName"]`);
}
signupEmail() {
    return cy.xpath(`//input[@id="signupEmail"]`);
}
signupPassword() {
    return cy.xpath(`//input[@id="signupPassword"]`);
}
signupRepeatPassword() {
    return cy.xpath(`//input[@id="signupRepeatPassword"]`);
}
 registerButton(){
    return cy.xpath(`//button[@class="btn btn-primary"]`);
}
headerContainer() {
    return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']//app-header//div[@class='container']/div`);
}
headerLogo(){
    return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']/div[@class='app-wrapper']/app-header//div[@class='container']/div/div[1]/a[@href='/']`);
}
headerNavHome() {
    return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']/div[@class='app-wrapper']/app-header//nav/a[@href='/']`);
}
headerNavAbout() {
    return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']//app-header//div[@class='container']/div//nav/button[1]`);
}
headerNavCotacts() {
    return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']//app-header//div[@class='container']/div//nav/button[2]`);
}
footerInfoText1() {
    return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']/app-footer/footer//p[.='© 2021 Hillel IT school']`);
}
footerInfoText2() {
    return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']/app-footer/footer/div/div/div[1]/p[2]`);
}
footerGlobal() {
    return cy.xpath(`//app-root/app-global-layout//app-footer/footer`);
}

signUpForm(user) {
    this.signUpName().type(user.name).should('have.value', user.name);
    this.signupLastName().type(user.lastName).should('have.value', user.lastName);
    this.signupEmail().type(user.email).should('have.value', user.email);
    this.signupPassword().type(user.password).should('have.value', user.password);
    this.signupRepeatPassword().type(user.password).should('have.value', user.password);
    this.registerButton().contains('Register').click();
}


validateSignUp() {
    cy.url().should('contain', this.signUpValidPage)
}
}
export const basePageLocators = new BasePageLocators();