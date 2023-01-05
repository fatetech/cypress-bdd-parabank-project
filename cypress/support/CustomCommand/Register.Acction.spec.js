Cypress.Commands.add('LunchSite', () => {
    cy.visit('/')
    cy.url().should('contain', '/parabank/index')
    
    })

    Cypress.Commands.add('RegisterLink', ()=>{
        cy.fixture('elements').then(ele =>{
            cy.get(ele.Register).click({ force: true })
        })
    })

    Cypress.Commands.add('EnterDetails', ()=>{
        cy.fixture('elements').then(ele=> {
            cy.get(ele.Register).click({ force: true })
            cy.get(ele.FirstNameInput).fill(ele.FirstName)
            cy.get(ele.LastNameInput).fill(ele.LastName)
            cy.get(ele.StreetInput).fill(ele.Street)
            cy.get(ele.CityInput).fill(ele.City)
            cy.get(ele.StateInput).fill(ele.State)
            cy.get(ele.ZipCodeInput).fill(ele.Zipcode)
            cy.get(ele.PhoneNumInput).fill(ele.PhoneNum)
            cy.get(ele.SsnInput).fill(ele.SSN)
            cy.get(ele.UsernameInput).fill(ele.Username)
            cy.get(ele.PasswordInput).fill(ele.Password)
            cy.get(ele.ConPasswordInput).fill(ele.ConfirmPassword)

        })
    })

    Cypress.Commands.add('RegisterBtn', ()=>{
        cy.fixture('elements').then(ele =>{
            cy.get(ele.RgisterBtn).click({ force: true })
        })
    })
    Cypress.Commands.add('VerifyRegistration', ()=>{
        cy.fixture('elements').then(ele =>{
            cy.get(ele.AccountVer).should('contain', ele.VerNote)
        })
    })

   

    // cy.get(ele.RgisterBtn).click({ force: true })
    // cy.get(ele.AccountVer).should('contain', ele.VerNote)

// Cypress.Commands.add('Registration', () => {
//     cy.fixture('elements').then(ele => {
//         cy.get(ele.Register).click({ force: true })
//     })
// })

// Cypress.Commands.add('EnterFN', () => {
//     cy.fixture('elements').then(ele => {
//         cy.get(ele.FirstNameInput).fill(ele.FirstName)
//     })
// })

// Cypress.Commands.add('EnterLN', () => {
//     cy.fixture('elements').then(ele => {
//         cy.get(ele.LastNameInput).fill(ele.LastName)
//     })
// })

// Cypress.Commands.add('EnterST', () => {
//     cy.fixture('elements').then(ele => {
//         cy.get(ele.StreetInput).fill(ele.Street)
//     })
// })

// Cypress.Commands.add('EnterCity', () => {
//     cy.fixture('elements').then(ele => {
//         cy.get(ele.CityInput).fill(ele.City)
//     })
// })

// Cypress.Commands.add('EnterState', () => {
//     cy.fixture('elements').then(ele => {
//         cy.get(ele.StateInput).fill(ele.State)
//     })
// })

// Cypress.Commands.add('EnterZip', () => {
//     cy.fixture('elements').then(ele => {
//         cy.get(ele.ZipCodeInput).fill(ele.Zipcode)
//     })
// })

// Cypress.Commands.add('EnterNumber', () => {
//     cy.fixture('elements').then(ele => {
//         cy.get(ele.PhoneNumInput).fill(ele.PhoneNum)
//     })
// })

// Cypress.Commands.add('EnterSSN', () => {
//     cy.fixture('elements').then(ele => {
//         cy.get(ele.SsnInput).fill(ele.SSN)
//     })
// })

// Cypress.Commands.add('CreateUsername', () => {
//     cy.fixture('elements').then(ele => {
//         cy.get(ele.UsernameInput).fill(ele.Username)
//     })
// })

// Cypress.Commands.add('CreatePassword', () => {
//     cy.fixture('elements').then(ele => {
//         cy.get(ele.PasswordInput).fill(ele.Password)
//     })
// })

// Cypress.Commands.add('ConfirmPassword', () => {
//     cy.fixture('elements').then(ele => {
//         cy.get(ele.ConPasswordInput).fill(ele.Password)
//     })
// })

// Cypress.Commands.add('Register', () => {
//     cy.fixture('elements').then(ele => {
//         cy.get(ele.RgisterBtn).click({ force: true })
//     })
// })

// Cypress.Commands.add('AccountVerification', () => {
//     cy.fixture('elements').then(ele => {
//         cy.get(ele.AccountVer).should('contain', ele.VerNote)
//     })
// })

// Cypress.Commands.add('ConfirmPassword', ()=>{
//     cy.fixture('elements').then(ele=>{
//         cy.get(ele.Register).click({force:true})
//     })
// })

