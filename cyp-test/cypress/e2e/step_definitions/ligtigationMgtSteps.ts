/// <reference types="cypress" />
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import { head } from "cypress/types/lodash";
import {litigationPage} from '../../pages/litigationMgtPage';


When('the user clicks on Claim Number Search and type', () => {
    litigationPage.clickOnClaimNumberSearchAndType()
})

Then ('verify that the searched claim number shows correct results', () => {
    litigationPage.verifySearchedClaimByNumber();
}) 

When('the user clicks on the Claim', () => {
    litigationPage.clickOnClaimNumber();
    //cy.get('.container>p>a').invoke('removeAttr', 'target').click();
})

Then('verify that the user is prompted to Claim detail page', () => {
    litigationPage.verifyClaimNumberIsClicked();
}) 

When('the user clicks on the litigation mgt CTA', () => {
    litigationPage.clickOnLitigationMgtCTA();
})

Then('verify that the user is prompted to Litigation Management page', () => {
    litigationPage.verifyLitigationMgtPage();
})

When('the user clicks on Arbitration Date and select the date', () => {
    litigationPage.clickOnArbitrationDate();
})

Then('the Arbitration Date should be populated correctly', () => {
    litigationPage.verifyArbitrationDate();
})

When('the user clicks on Meditation Date and select the date', () => {
    litigationPage.clickOnMeditationDate();
})

Then('the Meditation Date should be populated correctly', () => {
    litigationPage.verifyMeditationDate();
})

When('the user clicks on trial Date and select the date', () => {
    litigationPage.clickOnTrialDate();
})
    
Then('the trial Date should be populated correctly', () => {
    litigationPage.verifyTrialDate();
})

When('the user clicks on Budget Requested Date and select the date', () => {
    litigationPage.clickOnBudgetRequestedDate();
})
    
Then('the Budget Requested Date should be populated correctly', () => {
    litigationPage.verifyBudgetRequestedDate();
})

When('the user clicks on Budget Received Date and select the date', () => {
    litigationPage.clickOnBudgetReceivedDate();
})
    
Then('the Budget Received Date should be populated correctly', () => {
    litigationPage.verifyBudgetReceivedDate();
})