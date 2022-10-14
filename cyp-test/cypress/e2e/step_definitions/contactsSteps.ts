import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import { head } from "cypress/types/lodash";
import {contacts} from '../../pages/contactsPage';


When('the user clicks on the Contacts CTA', () => {
    contacts.clickOnContactsCTA()
})

Then('verify that the user is prompted to Contacts page', () => {
    contacts.verifyContactsPage()
})

When('the user clicks on the burger menu on contacts page', () => {
    contacts.clickOnBurgerMenu()
})

Then('verify that the buger menu is displayed and contents showing are correct', () => {
    contacts.verifyBurgerMenuContents()
})

When('the user clicks on Add Claimant Contact cta', () => {
    contacts.clickOnAddClaimantContactCTA()
})

Then('verify that the Add Claimaint pop-up window is displayed', () => {
    contacts.verifyAddClaimantContact()
})

When('the user enter details of Claimant contact and clicks on Submit button', () => {
    contacts.addInputsInNewContact()
})

Then('verify that the Claimant contact details should be added correctly', () => {
    contacts.verifyContact()
    contacts.verifyNewClaimantContact()
})

And('verify the edit icon on contacts', () => {
    contacts.verifyEditIcon();
})


When('the user clicks on Add Insured Contact cta', () => {
    contacts.clickOnAddInsuredContactCTA()
})

Then('verify that the Add Insured pop-up window is displayed', () => {
    contacts.verifyAddInsuredContact()
})

When('the user enter details of Insured contact and clicks on Submit button', () => {
    contacts.addInputsInNewContact()
})

Then('verify that the Insured contact details should be added correctly', () => {
    contacts.verifyContact()
    contacts.verifyInsuredContact()
})

When('the user clicks on Add Misc Contact cta', () => {
    contacts.clickOnAddMiscContactCTA()
})

Then('verify that the Add Misc pop-up window is displayed', () => {
    contacts.verifyAddMiscContact()
})

When('the user enter details of Misc contact and clicks on Submit button', () => {
    contacts.addInputsInNewContact()
})

Then('verify that the Misc contact details should be added correctly', () => {
    contacts.verifyContact()
    contacts.verifyMiscContact()
})

When('the user clicks on Add Involved Party Contact cta', () => {
    contacts.clickOnAddInvolvedPartyContactCTA()
})

Then('verify that the Add Involved Party pop-up window is displayed', () => {
    contacts.verifyAddInvolvedPartyContact()
})

When('the user enter details of Involved Party contact and clicks on Submit button', () => {
    contacts.addInputsInNewContact()
})

Then('verify that the Involved Party contact details should be added correctly', () => {
    contacts.verifyContact()
    contacts.verifyInvolvedPartyContact()
})

When('the user clicks on Search For Contact cta', () => {
    contacts.clickOnSearchForContactCTA()
})

Then('verify that the Search For Contact pop-up window is displayed', () => {
    contacts.verifySearchForContact()
})

When('the user clicks on search bar and type the valid user name', () => {
    contacts.searchForContact()
})

Then('verify that the searched user is displayed correctly', () => {
    contacts.verifySearchedContact()
})

When('the user clicks on searched user', () => {
    contacts.clickOnSearchedContact()
})

Then('verify that the searched user is added in contacts and showing correct details', () => {
    contacts.verifySearchedContactDetails()
})