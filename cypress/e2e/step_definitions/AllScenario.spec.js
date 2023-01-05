import { Given,Then, When } from "@badeball/cypress-cucumber-preprocessor";
import './CommonStep.spec'


Then(/^User fills in his or her details and create a username and password$/, () => {
	cy.EnterDetails();
});

When(/^User click the Register Button$/, () => {
	cy.RegisterBtn();
});

Then(/^User should get a welcome note$/, () => {
    cy.VerifyRegistration();
});

When(/^User click on the paybills link$/, () => {
	return cy.PaybillsLink();
});

Then(/^User should see a billpayment form$/, () => {
	return cy.BillPageVerification();
});

Then(/^User fills in all payee information details fields with valid data$/, () => {
	return cy.EnterPayeeDetails();
});

When(/^User click on the send payment button$/, () => {
	return cy.PaymentBtn();
});

Then(/^User should a successful payment confirmation note$/, () => {
	return cy.VerifyPayment();
});

When(/^User Click on the transfer link$/, () => {
	return cy.TransferPage();
});

Then(/^User should see the Transfer page$/, () => {
	return  cy.VerifyTransferPage();
});

Then(/^User should enter amount to be transferd$/, () => {
	return cy.EnterAmount();
});

Then(/^User should confirm his account number$/, () => {
	return cy.VerifyAccountNumber();
});

When(/^User click on the transfer button$/, () => {
	return cy.TransferBtn();
});

Then(/^User should get a Transfer Complete Note$/, () => {
	return cy.VerifyTransferSuccess();
});

When(/^User click on the open new account link$/, () => {
	return cy.OpenNewAcct();
});

Then(/^User should see a open account page title display$/, () => {
	return cy.verifyPage();
});

Then(/^User select account type to be savings or checking$/, () => {
	return cy.AcctType();
});

Then(/^User confirms selected account number of withdrawal$/, () => {
	return cy.AcctConfimation();
});

When(/^User click on open new account button$/, () => {
	return cy.CreateAcctBtn();
});

Then(/^User should get a successful account opening$/, () => {
	return cy.VerifyNewAcct();
});

Then(/^User click on Request Loan link$/, () => {
	return cy.RequestLoanLink();
});

Then(/^User should see a Aplly for Loan title with an empty form$/, () => {
	return cy.VerifyLoanPage();
});

Then(/^User fill the form with valid data$/, () => {
	return cy.EnterData();
});

When(/^User click on the Apply now button$/, () => {
	return cy.ApplyBtn();
});

Then(/^User should get a Loan approved text page$/, () => {
	return cy.AprrovedLoanResponse();
});

When(/^User click on the find tracsactions link$/, () => {
	return cy.TrackingLink();
});

Then(/^User should see find tracsactions heading and empty form$/, () => {
	return cy.PageVerification();
});

Then(/^User select and confirms the account number to be tracked$/, () => {
	return cy.AccountNum();
});

Then(/^User select tracsactions method and fill the required data$/, () => {
	return cy.DateTracking()
});

When(/^User click on the find transaction button$/, () => {
	return 	cy.TrackingBtn();
});

Then(/^User should get a successful tracking page with details of tracsactions been made$/, () => {
	return cy.SuccessfulTracking();
});
