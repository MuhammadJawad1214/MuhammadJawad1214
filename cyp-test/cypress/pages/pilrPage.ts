import cypress = require("cypress");
import { data } from "cypress/types/jquery";
import { eq } from "cypress/types/lodash";
import Input from '../e2e/data/inputs';
// import * as moment from 'moment';

export class pilrPage {
    elements = {
        claimTypeCTA: () => cy.get('[id="claimType"]'),
        propertySelection: () => cy.get('[data-value="P"]'),
        pilrCTA: () => cy.get('[href="/claim/9e297c3b-f47a-4aca-ba14-1422fddb073d/pilr"]'),
        verifyPilrCTA: () => cy.contains('Prior PILR Activity'),
        menuIconPilr: () => cy.get('[data-testid="MenuIcon"]').eq(1),
        createCTA: () => cy.contains('Create'),
        pilrDetailPage: () => cy.contains('PILR Details'),
        companyDropDown: () => cy.get('[id="companyCodeRef"]'),
        selectCompany: () => cy.get('[data-value="GSI"]'),
        policyType: () => cy.get('[id="policyType"]'),
        lossAddress1: () => cy.get('[id="lossAddressStreet1"]'),
        lossAddress2: () => cy.get('[id="lossAddressStreet2"]'),
        lossAddressCity: () => cy.get('[id="lossAddressCity"]'),
        lossAddressState: () => cy.get('[id="lossAddressState"]'),
        selectState: () => cy.get('[data-value="NY"]'),
        lossAddressZip: () => cy.get('[id="lossAddressZIP"]'),
        lossDescription: () => cy.get('[id="lossDesc"]'),
        insuredRole: () => cy.get('[id="insuredRole"]'),
        insuredBusiness: () => cy.get('[id="insuredBusiness"]'),
        insuredAddressStreet1: () => cy.get('[id="insuredAddressStreet1"]'),
        insuredAddressStreet2: () => cy.get('[id="insuredAddressStreet2"]'),
        insuredAddressCity: () => cy.get('[id="insuredAddressCity"]'),
        insuredStateDropDown: () => cy.get('[id="insuredAddressState"]'),
        insuredAddressZip: () => cy.get('[id="insuredAddressZIP"]'),
        causeOfLossDropDown: () => cy.get('[id="causeOfLossCode"]'),
        causeOfLoss: () => cy.get('[data-value="208"]'),
        propertyLoss: () => cy.get('[id="propertyLost"]'),
        vehicleID: () => cy.get('[id="vehicleID"]')
        };

    clickOnClaimTypeCTA(){
        cy.wait(5000);
        this.elements.claimTypeCTA().click();
        this.elements.propertySelection().click();
        }
    
    verifyPropertyIsSelected(){
        this.elements.claimTypeCTA().should('have.text', 'Property');
        this.elements.pilrCTA().should('be.visible');
        }

    clickOnPilrCTA(){
        this.elements.pilrCTA().click();
        cy.wait(1000);
    }

    verifyPilrPage(){
        this.elements.verifyPilrCTA().should('be.visible');
    }

    clickOnBurgerMenu(){
        this.elements.menuIconPilr().click();
    }

    verifyBurgerMenu(){
        this.elements.createCTA().should('be.visible');
    }

    clickOnCreate(){
        this.elements.createCTA().click();
    }

    verifyPilrDetailPage(){
        this.elements.pilrDetailPage().should('be.visible')
    }

    addPilrDetails(){
        this.elements.companyDropDown().click();
        this.elements.selectCompany().click();
        this.elements.policyType().click()
        .clear()
        .type('Commercial Property');
        this.elements.lossAddress1().click().clear().type(Input.mailingAddress);
        this.elements.lossAddress2().click().clear().type(Input.secondMailingAddress);
        this.elements.lossAddressCity().click().clear().type(Input.city);
        this.elements.lossAddressState().click();
        this.elements.selectState().click();
        this.elements.lossAddressZip().click().clear().clear().type(Input.zipCode); 
        this.elements.lossDescription().click().clear().type(Input.lossDescriptionInput);
    }  
    
    verifyPilrDetails(){
        this.elements.companyDropDown().should('have.text', 'General Star Indemnity Company **A.M. Best Rating=A++XV; S&P Rating=AA+');
        this.elements.policyType().should('have.value', 'Commercial Property')
        this.elements.lossAddress1().should('have.value', '24 wallstreet, NY');
        this.elements.lossAddress2().should('have.value', '23 street, NY');
        this.elements.lossAddressCity().should('have.value', 'New York City');
        this.elements.lossAddressState().should('have.text', 'New York');
        this.elements.lossAddressZip().should('have.value', '10001');
        this.elements.lossDescription().should('have.value', 'Testing Loss description field');
    }

    insuredInfo(){
        this.elements.insuredRole().click().clear().type(Input.insuredRole); 
        this.elements.insuredBusiness().click().clear().type(Input.insuredBusiness);
        this.elements.insuredAddressStreet1().click().clear().type(Input.mailingAddress);
        this.elements.insuredAddressStreet2().click().clear().type(Input.secondMailingAddress);
        this.elements.insuredAddressCity().click().clear().type(Input.city); 
        this.elements.insuredStateDropDown().click();
        this.elements.selectState().click();
        this.elements.insuredAddressZip().click().clear().clear().type(Input.zipCode); 
    }  
    
    verifyInsuredInfo(){
        this.elements.insuredRole().should('have.value', 'Insured');
        this.elements.insuredBusiness().should('have.value', 'Property sale/purchase')
        this.elements.insuredAddressStreet1().should('have.value', '24 wallstreet, NY');
        this.elements.insuredAddressStreet2().should('have.value', '23 street, NY');
        this.elements.insuredAddressCity().should('have.value', 'New York City');
        this.elements.insuredStateDropDown().should('have.text', 'New York');
        this.elements.insuredAddressZip().should('have.value', '10001');
    }

    lossInfo(){
        this.elements.causeOfLossDropDown().click();
        this.elements.causeOfLoss().click();
        this.elements.propertyLoss().click().clear().type(Input.propertyLoss);
        this.elements.vehicleID().click().clear().type(Input.vehicleID);
        
    }  
    
    verifyLossInfo(){
        this.elements.causeOfLossDropDown().should('have.text', 'Police Jail');
        this.elements.propertyLoss().should('have.value', 'House');
        this.elements.vehicleID().should('have.value', 'LEK 0002');
        
    }


  }
  export const pilr = new pilrPage();