/// <reference types="Cypress" />
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import data from "../../../fixtures/example.json";
import HomePage from "../../../support/pageObjects/homePage";
import SearchPage from "../../../support/pageObjects/searchPage";

const homePage = new HomePage();
const searchPage = new SearchPage();


Given('I navigate to perlego home page', () => {
    cy.visit(Cypress.env('url'));
})

When('I search for a book using the search bar', () => {
    homePage.typeIntoSearchBar(data.book+ '{enter}');
    searchPage.acceptCookies();
})

When('I filter the results of the searched parameter', () => {
    searchPage.clickSearchByDropdown();
    searchPage.selectSearchByOption();
    searchPage.clickPublicationDateDropdown();
    searchPage.selectPublicationDateOption();
    searchPage.clickTopicDropdown()
    searchPage.selectTopicOption()
    searchPage.clickPublisherDropdown()
    searchPage.selectPublisheOption()
    searchPage.clickFormatDropdown()
    searchPage.selectFormatOption()   
})

Then('I validate that the filter combinations return at least 5 pages of results', () => {
    searchPage.validatePagesOfResults()
})


