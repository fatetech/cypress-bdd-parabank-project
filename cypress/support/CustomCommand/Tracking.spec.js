var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '-' + dd + '-' + yyyy;



Cypress.Commands.add('TrackTransaction', () => {
 // document.write(today)
    cy.fixture('tracking').then(item => {
        cy.LoginUser();
        cy.wait(2000)
        cy.get(item.FindTransaction).should('contain.text', item.Verification).click();
        cy.get(item.PageTitle).should('exist').and('contain.text', item.Verification)
        cy.get(item.TrackingMethod).type(today)
        cy.wait(2000)
        cy.get(item.TrackBtn).should('contain.text', item.Verification).click()
        cy.get(item.TransactionLink).as('btn').click()
        // cy.get('@btn').click();
        cy.get(item.PageTitle).should("contain.html", item.DetailsNote)
        cy.url().should("contain", item.ConfirmTracking)

    })
})

Cypress.Commands.add('TrackingLink', ()=>{
    cy.fixture('tracking').then(item =>{
        cy.get(item.FindTransaction).should('contain.text', item.Verification).click();
    })
})

Cypress.Commands.add('PageVerification', ()=>{
    cy.fixture('tracking').then(item =>{
        cy.get(item.PageTitle).should('exist').and('contain.text', item.Verification)
    })
})

Cypress.Commands.add('AccountNum', ()=>{
    cy.fixture('tracking').then(item =>{
        cy.get(item.AccountNumber).should('be.visible')
    })
})

Cypress.Commands.add('DateTracking', ()=>{
    cy.fixture('tracking').then(item =>{
        cy.get(item.TrackingMethod).type(today)
        cy.wait(2000)
    })
})
Cypress.Commands.add('TransactionTracking', ()=>{
    cy.fixture('tracking').then(item =>{
        cy.get(item.TrackingMethod).type(today)
        cy.wait(2000)
    })
})

Cypress.Commands.add('TrackingBtn', ()=>{
    cy.fixture('tracking').then(item =>{
        cy.get(item.TrackBtn).should('contain.text', item.Verification).click()
    })
})

Cypress.Commands.add('SuccessfulTracking', ()=>{
    cy.fixture('tracking').then(item =>{
        cy.get(item.PageTitle).should("contain.html", item.DetailsNote)
        cy.url().should("contain", item.ConfirmTracking)
    })
})