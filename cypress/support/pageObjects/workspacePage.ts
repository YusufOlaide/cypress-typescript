/// <reference types="cypress" />
import data from "../../../cypress/fixtures/example.json";
class workspacePage {

    verifyWorkspace(){
       return cy.get('div[id="workspaces"] ul[role="list"] a[label=' + data.workspace + ']').should('be.visible').click()
    }

    verifyBookAdded(){
        return cy.get('[data-testid="Workspace-ResourceItem"]').should('have.length', 1);
    }

    selectOptionToDelete(){
       return cy.get('[data-testid="iconButton-moreOptions"]').click();
    }

    selectDeleteOption(){
       return cy.get('[data-testid="MoreOptions-Delete"]').click()
    }

    submit(){
        return cy.get('[data-testid="Error-Modal-Submit"]').click()
    }

    verifyWorkspaceIsDeleted(){
        return cy.get('span[data-testid="Sidebar-CreateFirstWorkspace"]').should('be.visible')
    }
}

export default workspacePage