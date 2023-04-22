/// <reference types="cypress" />
class loginPage {

    enterEmail(email){
       return  cy.get('#input-email').type(email);
    }

    moveToPasswordPage(){
        return  cy.get('[data-testid="LoginFormEmail-ContinueButton"]').click()
    }

    enterPassword(password){
        cy.get('.sc-QCRGo > input').type(password);
    }

    moveToDashboard(){
        cy.get('[data-testid="LoginFormPassword-ContinueButton"]').click()
    }

    verifyLoginStatus(){
        return cy.get('[data-testid="Sidebar-Home"]').should('be.visible') 
    }
}

export default loginPage