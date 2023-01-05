Cypress.Commands.add('RequestLoan', ()=>{
    cy.fixture('loan').then(loan => {
        cy.LoginUser();
        cy.get(loan.GetLoan).should('exist').click()
        cy.get(loan.LoanPageVerification).should('contain.text', loan.VerNote).and('be.visible')
        cy.get(loan.LoanAmount).type('100')
        cy.get(loan.DownPayment).type('50')
        cy.get(loan.Account).should('exist')
        cy.get(loan.ApplyBtn).should('have.value', 'Apply Now').click();
        cy.get('[ng-if="loanResponse.approved"]').should('contain.text', loan.SuccessfulLoanNote).and('exist')
        
    })
})

Cypress.Commands.add('RequestLoanLink', ()=>{
    cy.fixture('loan').then(loan => {
        cy.get(loan.GetLoan).should('exist').click()

    })
})
Cypress.Commands.add('VerifyLoanPage', ()=>{
    cy.fixture('loan').then(loan => {
        cy.get(loan.LoanPageVerification).should('contain.text', loan.VerNote).and('be.visible')

    })
})
Cypress.Commands.add('EnterData', ()=>{
    cy.fixture('loan').then(loan => {
        cy.get(loan.LoanAmount).type('1000')
        cy.get(loan.DownPayment).type('200')
        cy.get(loan.Account).should('exist')

    })
})
Cypress.Commands.add('LoanAccountNum', ()=>{
    cy.fixture('loan').then(loan =>{
        cy.get(loan.Account).select('18006').should('exist')
    })
})
Cypress.Commands.add('ApplyBtn', ()=>{
    cy.fixture('loan').then(loan => {
        cy.get(loan.ApplyBtn).should('have.value', 'Apply Now').click();

    })
})

Cypress.Commands.add('AprrovedLoanResponse', ()=>{
    cy.fixture('loan').then(loan => {
        cy.get('[ng-if="loanResponse.approved"]').should('contain.text', loan.SuccessfulLoanNote).and('exist')
    })
})
