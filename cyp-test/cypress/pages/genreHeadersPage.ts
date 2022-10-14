export class genreHeaderPage {
    elements = {
      legalDashboard: () => cy.get('[title="Legal Dashboard"]'),
      accountingDashboard: () => cy.get('[title="Accounting Dashboard"]'),
      expenseDashboard: () => cy.contains('Expense Dashboard'),
      claimsDashboard: () => cy.get('[title="Dashboard"]'),
      getLegalDashboardTitle: () => cy.get('.sc-jgbSNz'),
      getAccountingDashboardTitle: () => cy.get('.sc-ezWOiH'),
      getExpenseDashboardTitle: () => cy.get('.sc-gXmSlM'),
      getClaimsDashboardTitle: () => cy.get('.sc-bBrHrO')
    };
  
    clickOnLegalDashboard() {
      this.elements.legalDashboard().click();
    }
  
    clickOnAccountingDashboard(){
      this.elements.accountingDashboard().click();
    }
  
    clickOnExpenseDashboard(){
        this.elements.expenseDashboard().click();
      }
    
    clickOnClaimDashboard(){
        this.elements.claimsDashboard().click();
      }
    
    verifyLegalDashboardTitle(){
    //   this.elements.getLegalDashboardTitle().invoke('text').then((yourDivText) => {
    //     expect(yourDivText.toString().toLowerCase()).to.contain('Legal Dashboard');
    //  });
        this.elements.getLegalDashboardTitle().should('have.text', 'Legal Dashboard');
      }
    verifyExpenseDashboardTitle(){
        this.elements.getExpenseDashboardTitle().should('have.text', 'Expense Invoice Dashboard');
      }
    verifyAccountingDashboardTitle(){
        this.elements.getAccountingDashboardTitle().should('have.text', 'Accounting Dashboard');
      }
    verifyClaimsDashboardTitle(){
        this.elements.getClaimsDashboardTitle().should('have.text', 'Claims Dashboard');
      }
  
  }
  
  export const headerPage = new genreHeaderPage();