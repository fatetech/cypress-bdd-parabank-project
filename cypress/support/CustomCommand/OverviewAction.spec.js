Cypress.Commands.add('Overview', ()=>{
    cy.fixture('elements').then(ele=>{
        cy.LoginUser();
        cy.get(ele.OverviewInput).click()
        cy.get(ele.OverviewVer1).should('exist').and('contain','Accounts Overview')
        cy.get('[align="right"]').should('be.visible').and('contain.text','Total')
        cy.get(ele.OverviewVer2).should('not.be.empty').and('contain','$')
    })
})