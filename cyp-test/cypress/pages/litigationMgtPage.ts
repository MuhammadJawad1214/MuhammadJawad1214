import cypress = require("cypress");
// import * as moment from 'moment';

export class litigationMgtPage {
    elements = {
      claimNumberSearchBar: () => cy.get('#ag-29-input'),
      getSearchedClaimByNumber: () => cy.get('#cell-claimID-234 > a'),
      litigationMgtCTA: () => cy.get('[href="/claim/9e297c3b-f47a-4aca-ba14-1422fddb073d/litigation"]'),
      litigationPageVerification: () => cy.get('.sc-gsnTZi > span'),
      arbitrationDateCal: () => cy.get('[data-testid="CalendarIcon"]').first(),
      mediationDateCal: () => cy.get('[data-testid="CalendarIcon"]').eq(1),
      trialDateCal: () => cy.get('[data-testid="CalendarIcon"]').eq(2),
      budgetRequestedDateCal: () => cy.get('[data-testid="CalendarIcon"]').eq(3),
      budgetReceivedDateCal: () => cy.get('[data-testid="CalendarIcon"]').last(),
    };
  
    clickOnClaimNumberSearchAndType(){
      cy.wait(5000);
      this.elements.claimNumberSearchBar().click().type('TESTT02');
      }

    verifySearchedClaimByNumber(){
      cy.wait(5000);
      this.elements.getSearchedClaimByNumber().should('have.text', 'TESTT02');
      }

    clickOnClaimNumber(){
      this.elements.getSearchedClaimByNumber().invoke('removeAttr', 'target').click();
      }
    
    verifyClaimNumberIsClicked(){
      this.elements.litigationMgtCTA().should('be.visible');
      }

    clickOnLitigationMgtCTA(){
      this.elements.litigationMgtCTA().click();
      }

    verifyLitigationMgtPage(){
      this.elements.litigationPageVerification().should('be.visible');
      this.elements.arbitrationDateCal().click();
      }

    clickOnArbitrationDate(){
      this.elements.arbitrationDateCal();
      // cy.get('[aria-label="Oct 11, 2022"]')
      // .should('be.visible')
      // .click();
      // this.elements.litigationPageVerification().click();

      cy.get('[aria-label="Oct 11, 2022"]')
      .eq(0)
      .click()
    }

    verifyArbitrationDate(){
      //cy.get('[placeholder="mm/dd/yyyy"]').eq(0).should('have.text', '10/11/2022');
      }
    
    clickOnMeditationDate(){
      this.elements.mediationDateCal().click();
      cy.get('[aria-label="Oct 15, 2022"]')
      .should('be.visible')
      .click();
      // this.elements.litigationPageVerification().click();
      }
  
    verifyMeditationDate(){
      //cy.get('[placeholder="mm/dd/yyyy"]').eq(1).should('have.text', '10/15/2022');
      }
    
    clickOnTrialDate(){
      this.elements.trialDateCal().click();
      cy.get('[aria-label="Oct 16, 2022"]')
      .should('be.visible')
      .click();
      // this.elements.litigationPageVerification().click();
      // this.elements.trialDateCal().click();
      }
    
    verifyTrialDate(){
      //cy.get('[placeholder="mm/dd/yyyy"]').eq(2).should('have.text', '10/16/2022');
      }

    clickOnBudgetRequestedDate(){
      this.elements.budgetRequestedDateCal().click();
      cy.get('[aria-label="Oct 16, 2022"]').click();
      // this.elements.budgetRequestedDateCal().click();
      }
      
    verifyBudgetRequestedDate(){
      //cy.get('[placeholder="mm/dd/yyyy"]').eq(2).should('have.text', '10/16/2022');
      }

    clickOnBudgetReceivedDate(){
      this.elements.budgetRequestedDateCal().click();
      cy.get('[aria-label="Oct 16, 2022"]').click();
      // this.elements.budgetReceivedDateCal().click();
      }
      
    verifyBudgetReceivedDate(){
      //cy.get('[placeholder="mm/dd/yyyy"]').eq(2).should('have.text', '10/16/2022');
      }
    

  }
  export const litigationPage = new litigationMgtPage();