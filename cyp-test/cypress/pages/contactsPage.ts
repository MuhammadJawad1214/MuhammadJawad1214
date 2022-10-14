import cypress = require("cypress");
import { data } from "cypress/types/jquery";
import { eq } from "cypress/types/lodash";
import Input from '../e2e/data/inputs';
// import * as moment from 'moment';

export class contactsPage {
    elements = {
        contactsCTA: () => cy.get('[href="/claim/9e297c3b-f47a-4aca-ba14-1422fddb073d/contacts"]'),
        contactBurgerMenu: () => cy.get('.sc-KfMfS > [aria-label="split button"] > .MuiButton-root'),
        addClaimantContact: () => cy.get('#split-button-menu > [tabindex="0"]'),
        nameInputField: () => cy.get('#name'),
        emailAddressInputField: () => cy.get('#emailAddress'),
        phoneNumberInputField: () => cy.get('#phone'),
        mailingAddressInputField: () => cy.get('#address1'),
        addressLine2InputField: () => cy.get('#address2'),
        cityInputField: () => cy.get('#city'),
        stateDropdownMenu: () => cy.get('#state'),
        zipInputField: () => cy.get('#zip'),
        submitButton: () => cy.get('.MuiButton-contained'),
        addInsuredContact: () => cy.get('#split-button-menu > :nth-child(2)'),
        addMiscContact: () => cy.get('#split-button-menu > :nth-child(3)'),
        addInvolvedPartyContact: () => cy.get('#split-button-menu > :nth-child(4)'),
        searchForContact: () => cy.get('#split-button-menu > :nth-child(5)'),
        searchType: () => cy.get('#searchType'),
        searchedContact: () => cy.get('.MuiList-root > :nth-child(1)'),
        searchIcon: () => cy.get('.sc-ehMyHa > .MuiButtonBase-root'),
        searchBarForContact: () => cy.get('#searchTerm'),
        dataVerification: () => cy.get('[class="ag-cell-value"]'),
        deleteIcon: () => cy.get('[data-testid="DeleteIcon"]'),
        selectState: () => cy.get('[data-value="NY"]'),
        editContact: () => cy.get('[data-testid="EditIcon"]'),
        closeContact: () => cy.get('[data-testid="ChevronLeftIcon"]')
        };

    clickOnContactsCTA(){
        this.elements.contactsCTA().click();
        }
      
    verifyContactsPage(){
        this.elements.contactBurgerMenu().should('be.visible');
        }

    clickOnBurgerMenu(){
        this.elements.contactBurgerMenu().click();
        }
    
    verifyBurgerMenuContents(){
        this.elements.addClaimantContact().should('have.text', 'Add Claimant Contact');
        }

    clickOnAddClaimantContactCTA(){
        this.elements.contactBurgerMenu().click();
        this.elements.addClaimantContact().click();
        cy.wait(500);
        }

    verifyAddClaimantContact(){
        this.elements.nameInputField().should('be.visible');
        }
    
    addInputsInNewContact(){
        this.elements.nameInputField().click().type(Input.name); 
        this.elements.emailAddressInputField().click().type(Input.email);
        this.elements.phoneNumberInputField().click().type(Input.phoneNumber);
        this.elements.mailingAddressInputField().click().type(Input.mailingAddress);
        this.elements.addressLine2InputField().click().type(Input.secondMailingAddress);
        this.elements.cityInputField().click().type(Input.city);
        this.elements.stateDropdownMenu().click();
        this.elements.selectState().click();
        this.elements.zipInputField().click().type(Input.zipCode); 
        this.elements.submitButton().click();
        }

    verifyContact(){
        this.elements.dataVerification().eq(0).should('have.text','Jawad'); 
        this.elements.dataVerification().eq(2).should('have.text','24 wallstreet, NY 23 street, NY'); 
        this.elements.dataVerification().eq(3).should('have.text','New York City'); 
        this.elements.dataVerification().eq(4).should('have.text','NY'); 
        this.elements.dataVerification().eq(5).should('have.text','jawad@test.com'); 
        this.elements.dataVerification().eq(6).should('have.text','(234) 567-8912'); 
        }

    verifyNewClaimantContact(){
        this.elements.dataVerification().eq(1).should('have.text','Claimant');
    }

    verifyEditIcon(){
        this.elements.editContact().eq(0).click();
        this.elements.closeContact().should('be.visible');
        this.elements.closeContact().click();
        this.elements.deleteIcon().eq(0).click();
        cy.wait(5000);
    }

    clickOnAddInsuredContactCTA(){
        this.elements.contactBurgerMenu().click();
        this.elements.addInsuredContact().click();
        }

    verifyAddInsuredContact(){
        this.elements.nameInputField().should('be.visible');
        }

    verifyInsuredContact(){
        this.elements.dataVerification().eq(1).should('have.text','Insured');
        this.elements.deleteIcon().eq(0).click();
        cy.wait(5000);
        }

    clickOnAddMiscContactCTA(){
        this.elements.contactBurgerMenu().click();
        this.elements.addMiscContact().click();
        }
    
    verifyAddMiscContact(){
        this.elements.nameInputField().should('be.visible');
        }

    verifyMiscContact(){
        this.elements.dataVerification().eq(1).should('have.text','Misc');
        this.elements.deleteIcon().eq(0).click();
        cy.wait(5000);
        }
    
    clickOnAddInvolvedPartyContactCTA(){
        this.elements.contactBurgerMenu().click();
        this.elements.addInvolvedPartyContact().click();
        }
        
    verifyAddInvolvedPartyContact(){
        this.elements.nameInputField().should('be.visible');
        }

    verifyInvolvedPartyContact(){
        this.elements.dataVerification().eq(1).should('have.text','Involved');
        this.elements.deleteIcon().eq(0).click();
        cy.wait(5000);
        }

    clickOnSearchForContactCTA(){
        this.elements.contactBurgerMenu().click();
        this.elements.searchForContact().click();
        }
            
    verifySearchForContact(){
        this.elements.searchType().should('be.visible');
        }

    searchForContact(){
        this.elements.searchBarForContact().click().type(Input.contactSearch);
        }

    verifySearchedContact(){ 
        this.elements.searchIcon().click();
        this.elements.searchedContact().should('be.visible');
    }

    clickOnSearchedContact(){ 
        this.elements.searchedContact().click();
    }

    verifySearchedContactDetails(){
        this.elements.dataVerification().eq(0).should('have.text','Allmark Services'); 
        this.elements.dataVerification().eq(1).should('have.text','Lookup');
        this.elements.dataVerification().eq(2).should('have.text','10805 Sunset Office Drive  Suite 304'); 
        this.elements.dataVerification().eq(3).should('have.text',' St. Louis'); 
        this.elements.dataVerification().eq(4).should('have.text','MO'); 
        this.elements.dataVerification().eq(5).should('have.text','stl@allmarkasi.com'); 
        this.elements.dataVerification().eq(6).should('have.text','(314) 966-5555'); 
        this.elements.deleteIcon().eq(0).click();
        cy.wait(5000);
    }

  }
  export const contacts = new contactsPage();