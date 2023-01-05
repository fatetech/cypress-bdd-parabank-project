import { Given, Then, When} from "@badeball/cypress-cucumber-preprocessor"




Given(/^Client lunch the correct Url of Parabank site$/, () => {
	cy.LunchSite();
});

Then(/^Client click on the Register tab$/, () => {
	cy.RegisterLink();
});

Then(/^Client fills in all single register details field with vaild data$/, (dataTable) => {
    dataTable.hashes().forEach(row =>{
        cy.fixture('elements').then(ele=> {
            cy.get(ele.FirstNameInput).type(row.FirstName)
            cy.get(ele.LastNameInput).type(row.LastName)
            cy.get(ele.StreetInput).type(row.Address)
            cy.get(ele.CityInput).type(row.City)
            cy.get(ele.StateInput).type(row.State)
            cy.get(ele.ZipCodeInput).type(row.Zipcode)
            cy.get(ele.PhoneNumInput).type(row.PhoneNum)
            cy.get(ele.SsnInput).type(row.SSN)
            

        })
    })

});

Then(/^Client create username and password and confrim it for possible login$/, (table) => {
    table.hashes().forEach(elements => {
        cy.fixture('elements').then(ele=>{
            cy.get(ele.UsernameInput).type(elements.Username)
            cy.get(ele.PasswordInput).type(elements.Password)
            cy.get(ele.ConPasswordInput).type(elements.Password)
        })
    })
});

When(/^Client click on the register button$/, () => {
	cy.RegisterBtn();
});

Then(/^Client should see a welcome heading with his or her username$/, () => {
    cy.VerifyRegistration();
});

When(/^Client click on the paybills tab to make a payment$/, () => {
	cy.PaybillsLink();
});

Then(/^Client should see a billpayment form$/, () => {
	cy.BillPageVerification();
});

Then(/^Client enters all valid data required and confrim account number$/, (dataTable) => {
	dataTable.hashes().forEach(ele =>{
        cy.fixture('paybills').then(el =>{
        cy.get(el.PayeeInput).should('exist').type(ele.PayeeName)
        cy.get(el.PayeeST).should('exist').type(ele.Address)
        cy.get(el.PayeeCity).should('exist').type(ele.City)
        cy.get(el.PayeeState).should('exist').type(ele.State)
        cy.get(el.PayeeZip).should('exist').type(ele.Zipcode)
        cy.get(el.PayeeContact).should('exist').type(ele.Phone)
        cy.get(el.PayeeAcct).should('exist').type(ele.Account)
        cy.get(el.ConfirmPayeeAcc).should('exist').type(ele.Account)
        cy.get(el.AmountInput).should('exist').type(ele.Amount)

        })
    
    })
});

When(/^Client click on the send payment button$/, () => {
	cy.PaymentBtn();
});

Then(/^Client should have a successful payment confirmation text$/, () => {
	cy.VerifyPayment();
});

When(/^Client Click on the transfer tab$/, () => {
	cy.TransferPage();
});

Then(/^Client should see the Transfer page$/, () => {
	cy.VerifyTransferPage();
});

Then(/^Client  enter amount to be transferd$/, (Table) => {
	Table.hashes().forEach(row =>{
        cy.fixture('elements').then(ele =>{
            cy.get(ele.EnterTfAmount).type(row.Amount)
            cy.wait(1000)
        })
    })
});

Then(/^Client confirm  account number$/, () => {
	cy.VerifyAccountNumber();
});

When(/^Client click on the transfer button$/, () => {
	cy.TransferBtn();
});

Then(/^Client should get a Transfer Complete text$/, () => {
	cy.VerifyTransferSuccess()
});

When(/^Client click on the open new account tab$/, () => {
	cy.OpenNewAcct();
});

Then(/^Client should see a open account page title display$/, () => {
	cy.verifyPage();
});

Then(/^Client select account type to be savings or checking$/, () => {
	cy.AcctType();
});

Then(/^Client confirms selected account number for withdrawal$/, () => {
	cy.AcctConfimation();
});

When(/^Client click on open new account button$/, () => {
	cy.CreateAcctBtn();
});

Then(/^Client should get a successful account opening$/, () => {
	cy.VerifyNewAcct();
});

When(/^Client click on Request Loan tab$/, () => {
	cy.RequestLoanLink();
});

Then(/^Client should see a Apply for Loan title with an empty form$/, () => {
	cy.VerifyLoanPage();
});

Then(/^Client fills the loan amount and down payment section$/, (form) => {
	form.hashes().forEach(section =>{
        cy.fixture('loan').then(loan =>{
            cy.get(loan.LoanAmount).type(section.LoanAmount);
            cy.get(loan.DownPayment).type(section.Downpayment )
        })
    })
});

Then(/^Client verify account number$/, () => {
	cy.fixture('loan').then(loan =>{
        cy.get(loan.Account).should('exist').and('not.be.empty')
        //cy.get(' #fromAccountId > option:nth-child(2)').should('exist').and('not.be.empty')
        // cy.get(loan.Account).select('18006').should('exist')
        // #fromAccountId > option:nth-child(2)
    })
});

When(/^Client click on the Apply now button$/, () => {
	cy.ApplyBtn();
});

Then(/^Client should get a Loan approved text page$/, () => {
	cy.AprrovedLoanResponse();
});

When(/^Client click on the find tracsactions tab$/, () => {
	cy.TrackingLink();
});

Then(/^Client should see a find tracsactions heading with an empty form with various tracking method$/, () => {
	cy.PageVerification();
});

Then(/^Client confirms the account number to be tracked$/, () => {
	cy.AccountNum();
});

Then(/^Client select a find tracsactions method and fill the required data$/, () => {
	cy.TransactionTracking();
});

When(/^Client click on the find transaction button$/, () => {
	cy.TrackingBtn();
});

Then(/^Client should get a successful tracking page with details of tracsactions that has been made$/, () => {
	cy.SuccessfulTracking();
});
