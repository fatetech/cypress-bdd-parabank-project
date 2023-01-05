Cypress.Commands.add('PayBill', ()=>{
    cy.fixture('paybills').then(el=>{
        cy.LoginUser();
        cy.wait(2000)
        cy.get(el.BillPay).should('contain',el.BillpayNote).click()
        cy.wait(2000)
        cy.get(el.BillPayVerification).should('contain.text', el.BillPayVerNote)
        cy.get(el.PayeeInput).should('exist').type(el.PayeeName)
        cy.get(el.PayeeST).should('exist').type(el.StreetName)
        cy.get(el.PayeeCity).should('exist').type(el.CityName)
        cy.get(el.PayeeState).should('exist').type(el.StateName)
        cy.get(el.PayeeZip).should('exist').type(el.ZipCode)
        cy.get(el.PayeeContact).should('exist').type(el.Contact)
        cy.get(el.PayeeAcct).should('exist').type(el.AcctNum)
        cy.get(el.ConfirmPayeeAcc).should('exist').type(el.AcctNum)
        cy.get(el.AmountInput).should('exist').type(el.Amount)
        cy.get(el.PayeeAcctId).should('exist')
        cy.wait(1000)
        cy.get(el.PaymentBtn).should('exist').click()
        cy.get(el.PaymentVerification).contains(el.PayeeName)

    })
})

Cypress.Commands.add('PaybillsLink', ()=>{
    cy.fixture('paybills').then(el=>{
        cy.get(el.BillPay).should('contain',el.BillpayNote).click()
        cy.wait(2000)
    })
})

Cypress.Commands.add('BillPageVerification', ()=>{
    cy.fixture('paybills').then(el=>{
        cy.get(el.BillPayVerification).should('contain.text', el.BillPayVerNote)
    })
})

Cypress.Commands.add('EnterPayeeDetails', ()=>{
    cy.fixture('paybills').then(el=>{
        cy.get(el.PayeeInput).should('exist').type(el.PayeeName)
        cy.get(el.PayeeST).should('exist').type(el.StreetName)
        cy.get(el.PayeeCity).should('exist').type(el.CityName)
        cy.get(el.PayeeState).should('exist').type(el.StateName)
        cy.get(el.PayeeZip).should('exist').type(el.ZipCode)
        cy.get(el.PayeeContact).should('exist').type(el.Contact)
        cy.get(el.PayeeAcct).should('exist').type(el.AcctNum)
        cy.get(el.ConfirmPayeeAcc).should('exist').type(el.AcctNum)
        cy.get(el.AmountInput).should('exist').type(el.Amount)
        cy.get(el.PayeeAcctId).should('exist')
        cy.wait(1000)
    })
})
Cypress.Commands.add('PaymentBtn', ()=>{
    cy.fixture('paybills').then(el=>{
        cy.get(el.PaymentBtn).should('exist').click()
    })
})
Cypress.Commands.add('VerifyPayment', ()=>{
    cy.fixture('paybills').then(el=>{
        cy.get(el.PaymentVerification).contains(el.PayeeName)
    })
})