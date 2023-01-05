Cypress.Commands.add('Transfer', ()=>{
    cy.fixture('elements').then(ele=>{
        cy.LoginUser();
        cy.get(ele.Transfer).click();
        cy.get(ele.AccountVer).should('contain.text',ele.TfNote)
        cy.wait(2000)
        cy.get(ele.EnterTfAmount).type(ele.AmountTf)
         cy.wait(1000)
        cy.get(ele.BankNum).should('not.be.empty');
        cy.get(ele.TfButton).click();
        cy.get(ele.AccountVer).should('contain.text', ele.Tfverfication)
    })
})

Cypress.Commands.add('TransferPage', ()=>{
    cy.fixture('elements').then(ele =>{
        cy.get(ele.Transfer).click();
    })
})

Cypress.Commands.add('VerifyTransferPage', ()=>{
    cy.fixture('elements').then(ele =>{
        cy.get(ele.AccountVer).should('contain.text',ele.TfNote)
        cy.wait(2000)
    })
})

Cypress.Commands.add('EnterAmount', ()=>{
    cy.fixture('elements').then(ele =>{
        cy.get(ele.EnterTfAmount).type(ele.AmountTf)
        cy.wait(1000)
    })
})

Cypress.Commands.add('VerifyAccountNumber', ()=>{
    cy.fixture('elements').then(ele =>{
        cy.get(ele.BankNum).should('not.be.empty')
    })
})

Cypress.Commands.add('TransferBtn', ()=>{
    cy.fixture('elements').then(ele =>{
        cy.get(ele.TfButton).click();
    })
})

Cypress.Commands.add('VerifyTransferSuccess', ()=>{
    cy.fixture('elements').then(ele =>{
        cy.get(ele.AccountVer).should('contain.text', ele.Tfverfication)
    })
})