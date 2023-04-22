/// <reference types="cypress" />
class homePage {

    acceptCookies(){
        return cy.get('[data-testid="CookieBanner-AcceptCookiesButton"]').click();
    }
    
    typeIntoSearchBar(par){
        return cy.get('[data-testid="LandingPage-SearchBar"]').type(par)
    }

    clickOnLoginLink(){
        return cy.get('[data-testid="CheckoutNavBar-LoginLink"]').click()
    }
}

export default homePage