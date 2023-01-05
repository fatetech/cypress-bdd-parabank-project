Cypress.Commands.add('OpenNewAccount', ()=>{
    cy.fixture('newAccount').then(user=>{
        cy.LoginUser();
        cy.get(user.CreatNewAccount).should('contain.text',user.VerrificationNote).click()
        cy.url().should('eq', user.UrlVerification)
        cy.wait(1000)
        cy.get(user.AccountType).select(user.AccountOption).should('have.value', '1')
        cy.get(user.NewAccountNum).should('have.value', '16896')
        cy.get(user.CreatAccountBtn).click();
        cy.get(user.VerifyNewAccount).should('exist')

    })
})

Cypress.Commands.add('OpenNewAcct', ()=>{
    cy.fixture('newAccount').then(user =>{
        cy.get(user.CreatNewAccount).should('contain.text',user.VerrificationNote).click()

    })
})

Cypress.Commands.add('verifyPage', ()=>{
    cy.fixture('newAccount').then(user =>{
        cy.url().should('eq', user.UrlVerification)
        cy.wait(1000)

    })
})

Cypress.Commands.add('AcctType', ()=>{
    cy.fixture('newAccount').then(user =>{
        cy.get(user.AccountType).select(user.AccountOption).should('have.value', '1')

    })
})

Cypress.Commands.add('AcctConfimation', ()=>{
    cy.fixture('newAccount').then(user =>{
        cy.get(user.NewAccountNum).should('not.be.hidden')
        cy.wait(1000)

    })
})

Cypress.Commands.add('CreateAcctBtn', ()=>{
    cy.fixture('newAccount').then(user =>{
        cy.get(user.CreatAccountBtn).click();
    })
})

Cypress.Commands.add('VerifyNewAcct', ()=>{
    cy.fixture('newAccount').then(user =>{
        cy.get(user.VerifyNewAccount).should('exist')

    })
})