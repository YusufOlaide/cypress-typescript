/// <reference types="Cypress" />
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import data from "../../../fixtures/example.json";
import HomePage from "../../../support/pageObjects/homePage";
import LoginPage from "../../../support/pageObjects/loginPage";
import DashboardPage from "../../../support/pageObjects/dashboardPage";
import WorkspacePage from "../../../support/pageObjects/workspacePage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const workspacePage = new WorkspacePage();

Given('I navigate to Workspace Registration Link', () => {
    cy.visit(Cypress.env('url')+data.regLink);
})

When('I login my account previously registered', () => {
   homePage.acceptCookies();
   homePage.clickOnLoginLink();
   loginPage.enterEmail(data.email);
   loginPage.moveToPasswordPage();
   loginPage.enterPassword(data.pass)
   loginPage.moveToDashboard();
})

Then('I should be logged in', () => {
    loginPage.verifyLoginStatus();
})

When('I add a book to a new workspace', () => {
    dashboardPage.selectBook();
    dashboardPage.clickDropwdown();
    dashboardPage.clickToAddNewWorkspace();
    dashboardPage.enterWorkspaceName(data.workspace);
    dashboardPage.createWorkspace();   
})

Then('I should see and be able to navigate to the new workspace created', () => {
    workspacePage.verifyWorkspace();
})

Then('I should see the book added delete workspace', () => {
    workspacePage.verifyBookAdded();
    workspacePage.selectOptionToDelete();
    workspacePage.selectDeleteOption();
    workspacePage.submit();
    workspacePage.verifyWorkspaceIsDeleted();
})





