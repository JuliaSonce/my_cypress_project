import {User} from "../models/User";


export class GaragePageLocators{
     baseUrl = "https://guest:welcome2qauto@qauto2.forstudy.space/";
     profilePageUrl = `${this.baseUrl}panel/profile`
    headerNavContainer() {
        return cy.xpath(`//app-root/app-global-layout//app-header/header/div/div`)
    }
    headerGaragMenu() {
        return cy.xpath(`//app-root/app-global-layout//app-header/header/div/div/div/nav/a[@href='/panel/garage']`)
    }
    headerFuelExpensesMenu() {
        return cy.xpath(`//app-root/app-global-layout//app-header/header/div/div/div/nav/a[@href='/panel/expenses']`)
    }
    headerInstructionsMenu() {
        return cy.xpath(`//app-root/app-global-layout//app-header/header/div/div/div/nav/a[@href='/panel/instructions']`)
    }
    headerMyProfielDropdown() {
        return cy.xpath(`//button[@id='userNavDropdown']`)
    }
    dropdownMyProfielGarageMenu() {
        return cy.xpath(`//app-root/app-global-layout//app-header//app-user-nav/div/nav/a[@href='/panel/garage']`)
    }
    dropdownMyProfielFuelExpensesMenu() {
        return cy.xpath(`//app-root/app-global-layout//app-header//app-user-nav/div/nav/a[@href='/panel/expenses']`)
    }
    dropdownMyProfielInstructionsMenu() {
        return cy.xpath(`//app-root/app-global-layout//app-header//app-user-nav/div/nav/a[@href='/panel/instructions']`)
    }
    dropdownMyProfieProfielMenu() {
        return cy.xpath(`//app-root/app-global-layout//app-header//app-user-nav/div/nav/div[@class='user-nav_menu-group']/a[@href='/panel/profile']`)
    }
    dropdownMyProfieSettingsMenu() {
        return cy.xpath(`//app-root/app-global-layout//app-header//app-user-nav/div/nav/div[@class='user-nav_menu-group']/a[@href='/panel/settingss']`)
    }
    dropdownMyProfieLogout() {
        return cy.xpath(`//nav[@safeclass~'\bdropdown-menu\b.*\bshow\b.*\buser-nav_menu\b']/button[@innertext='Logout']`)
    }
    navSidebarMenu() {
        return cy.xpath(`//nav[@class="sidebar d-flex flex-column"]`); 
    }
   seidbarGarageMenu() {
    return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']//app-panel-layout//div[@class='row']/div[1]/nav/a[@href='/panel/garage']`)
   }
   seidbarFuelExpensesMenu() {
    return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']//app-panel-layout//div[@class='row']/div[1]/nav/a[@href='/panel/garage']`)
   }
   seidbarInstructionsMenu() {
    return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']//app-panel-layout//div[@class='row']/div[1]/nav/a[@href='/panel/instructions']`)
  }
  seidbarProfileMenu() {
    return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']//app-panel-layout//div[@class='row']/div[1]/nav/a[@href='/panel/instructions']`)
  }
  seidbarSettingsMenu() {
    return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']/div[@class='app-wrapper']/div[@class='app-content']/app-panel-layout//nav//a[@href='/panel/settings']`)
  }
  seidbarLogoutsMenu() {
    return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']//div[@class='app-content']/app-panel-layout//nav/a[4]`)
  }
  addCarButtonGaragePage() {
    return cy.xpath(`//app-root/app-global-layout/div[@class='global-layout']/div[@class='app-wrapper']/div[@class='app-content']/app-panel-layout/div[@class='panel-layout']//app-garage//button[@class='btn btn-primary']`)
 }
  editProfileProfilePanel() {
    return cy.xpath(`//body/app-root/app-global-layout/div[@class='global-layout']/div[@class='app-wrapper']/div[@class='app-content']/app-panel-layout//app-profile//button[@class='btn btn-primary']`)
  }
  mainProfieContainer(){
    return cy.get('.main')
  }
  
  validateUserName() {
    const user = User.validUser();
    const userFullName = `${user.name} ${user.lastName}`;
    cy.visit(this.profilePageUrl)
    this.mainProfieContainer().should('contain', userFullName);
}
}
export const garagePageLocators = new GaragePageLocators;