/// <reference types="cypress" />
import data from "../../../cypress/fixtures/example.json"
const click = $el => $el.click()

class searchPage {

    acceptCookies(){
        return cy.get('[data-testid="CookieBanner-AcceptCookiesButton"]').click();
    }

    clickSearchByDropdown(){
        return cy.get('div[class="sc-fBnnfK cCUoND"] div[class="sc-gmcCKa gMUhV"]').click()
    }

    selectSearchByOption(){
        return cy.get('div[id="dropdown list item ' + data.searchBy + '"]'+' div[class="sc-cgFNHA xlyhw"]').click()
    }

    clickPublicationDateDropdown(){
        return cy.get('div[class="sc-tKebc kOIzN"] div[class="sc-gmcCKa gMUhV"]').pipe(click)
    }

    selectPublicationDateOption(){
        return cy.get('div[id="dropdown list item ' + data.pubDate + '"]'+' div[class="sc-cgFNHA xlyhw"]').pipe(click);
    }

    clickTopicDropdown(){
        return cy.get('div[data-testid="FilterFacetTopic"] div[class="sc-gmcCKa gMUhV"]').pipe(click)
    }

    selectTopicOption(){
        return cy.get('div[id="dropdown list item ' + data.topic + '"]'+' div[class="sc-cgFNHA xlyhw"]').click({force:true})
    }

    clickPublisherDropdown(){
        return cy.get('div[data-testid="FilterFacetPublisher"] div[class="sc-gmcCKa gMUhV"]').pipe(click)
    }

    selectPublisheOption(){
        return cy.get('div[id="dropdown list item ' + data.publisher + '"]'+' div[class="sc-cgFNHA xlyhw"]').click({force:true})
    }

    clickFormatDropdown(){
        return cy.get('div[class="sc-wtwbJ eEVyBa"] div[class="sc-gmcCKa gMUhV"]').pipe(click)
    }

    selectFormatOption(){
        return cy.get('div[id="dropdown list item ' + data.format + '"]'+' div[class="sc-cgFNHA xlyhw"]').click({force:true})
    }

    validatePagesOfResults(){
       return cy.get('div[aria-label="Go to next page"] a').then(($element) => {
            // Use an if statement to assert if the element is visible
            if ($element.is(':visible')) {
                cy.get('div[aria-label="Go to next page"] a').click()
                cy.get('div[aria-label="Go to page 5"]').should('be.visible')
            } else {
              cy.log('Item returned is <= 36');
            }
          });
    }
}

export default searchPage

