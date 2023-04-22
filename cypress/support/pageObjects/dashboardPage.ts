/// <reference types="cypress" />
class dashboardePage {

    selectBook(){
       return  cy.get('[href="/book/2666224/what-the-future-looks-like-scientists-predict-the-next-great-discoveries-and-reveal-how-todays-breakthroughs-are-already-shaping-our-world-pdf"] > [data-testid="BookGridItem"] > [data-testid="BookCard"] > .sc-dpJOxQ > .sc-cdhLHq > picture > [data-testid="BookCover"]').trigger('mouseover')
    }

    clickDropwdown(){
        return  cy.get('.sc-UpCWa').click();
    }

    clickToAddNewWorkspace(){
       return cy.get('.sc-jLobnj').click();
    }

    enterWorkspaceName(name){
       return cy.get('[data-testid="ResourceActivity-WorkspaceTitleInput"]').type(name)
    }

    createWorkspace(){
        return cy.get('.sc-fYyKnq').click()
    }
}

export default dashboardePage 
