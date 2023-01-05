Cypress.Commands.add('LoginUser', ()=>{
    cy.fixture('elements').then(ele=>{
        cy.get(ele.LoginUserInput).should('be.visible').type(ele.Username)
        cy.get(ele.LoginPWIput).should('be.visible').type(ele.Password)
        cy.get(ele.LoginBtn).should('be.visible').click({force:true})
        cy.contains(ele.LoginVerif,ele.VerNote)
    })
})
Cypress.Commands.add('InsertLoginDetails', ()=>{
    cy.fixture('elements').then(ele=>{
        cy.get(ele.LoginUserInput).should('be.visible').type(ele.Username)
        cy.get(ele.LoginPWIput).should('be.visible').type(ele.Password)
    })
})
Cypress.Commands.add('LoginBtn', ()=>{
    cy.fixture('elements').then(ele=>{
        cy.get(ele.LoginBtn).should('be.visible').click({force:true})
    })
})
Cypress.Commands.add('VerifyLogin', ()=>{
    cy.fixture('elements').then(ele=>{
        cy.contains(ele.LoginVerif,ele.VerNote)
    })
})