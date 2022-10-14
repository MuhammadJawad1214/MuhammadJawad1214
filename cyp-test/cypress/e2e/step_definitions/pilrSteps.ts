import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import { head } from "cypress/types/lodash";
import {pilr} from '../../pages/pilrPage';


When('the user click on claim type and select property', () => {
    pilr.clickOnClaimTypeCTA()
})

Then('verify that the claim type is selected to property and PILR tab is displayed', () => {
    pilr.verifyPropertyIsSelected()
})

When('the user clicks on the PILR CTA', () => {
    pilr.clickOnPilrCTA()
})

Then('verify that the user is prompted to PILR page', () => {
    pilr.verifyPilrPage()
})

When('the user clicks on the burger menu on Pilr page', () => {
    pilr.clickOnBurgerMenu()
})

Then('verify that the buger menu is showing correct deatils', () => {
    pilr.verifyBurgerMenu()
})

When('the user clicks on the Create button', () => {
    pilr.clickOnCreate()
})

Then('verify that the user is prompted to PILR Details page', () => {
    pilr.verifyPilrDetailPage()
})

When('the user enter details in PILR Details section', () => {
    pilr.addPilrDetails()
})

Then('verify that the entered details are populated correctly in PILR Details', () => {
    pilr.verifyPilrDetails()
})

When('the user enter details in Insured Information Details section', () => {
    pilr.insuredInfo()
})

Then('verify that the entered details are populated correctly in Insured Information', () => {
    pilr.verifyInsuredInfo()
})

When('the user enter details in Loss Information Details section', () => {
    pilr.lossInfo()
})

Then('verify that the entered details are populated correctly in Loss Information', () => {
    pilr.verifyLossInfo()
})

