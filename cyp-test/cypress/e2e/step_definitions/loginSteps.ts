/// <reference types="cypress" />
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

// const loginPage = require("../pages/LoginPage");

//Object Creation for PageObject Page Class and assigning it to a constant variable

// const loginPage=new loginPage();
    
//test steps 
Given('I am in home page', async() => {
    cy.ntlm([Cypress.env("domain")], Cypress.env("username"), Cypress.env("password"),'grn.genre.com')
    // cy.ntlmSso(["www.google.com"])
    cy.visit(Cypress.env("base_url"));
    // cy.get('.sc-bBrHrO feSUMP');
    // cy.contains('G2 Claims');
    // cy.contains('Legal Dashboard').click;
    // // cy.contains('sc-dmRaPn KnWwD').click;
    // cy.get('#ag-29-input').type('hasan')
    // .should('have.text', 'G2 Claims')
    // cy.get('h1[class="sc-dSuTWQ ge"]', { timeout: 50000 }).should('be.visible');
})

When('I insert username as {string} and password as {string}', (Username , Password) => {
    console.log("Hi");
})

When ('I click on login button', () => {
    console.log("Hi");
})

Then ('I verify i am logged in sucessfully', () => {
    console.log("Hi");
})

