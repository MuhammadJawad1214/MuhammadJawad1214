/// <reference types="cypress" />
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import { head } from "cypress/types/lodash";
// import {headerPage} from 'cypress/pages/genreHeadersPage';
import {headerPage} from '../../pages/genreHeadersPage';


When('I click on legal dashboard header', () => {
    headerPage.clickOnLegalDashboard()
})

Then ('I verify i am on the legal dashboard', () => {
    headerPage.verifyLegalDashboardTitle()
})

When('I click on accounting dashboard header', () => {
    headerPage.clickOnAccountingDashboard()
})

Then ('I verify i am on the accounting dashboard', () => {
    headerPage.verifyAccountingDashboardTitle()
})
When('I click on expense dashboard header', () => {
    headerPage.clickOnExpenseDashboard()
})

Then ('I verify i am on the expense dashboard', () => {
    headerPage.verifyExpenseDashboardTitle()
})
When('I click on dashboard header', () => {
    headerPage.clickOnClaimDashboard()
})

Then ('I verify i am on the dashboard page', () => {
    headerPage.verifyClaimsDashboardTitle();
})


