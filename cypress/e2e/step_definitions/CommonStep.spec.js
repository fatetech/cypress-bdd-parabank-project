import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^User lunch the site url$/, () => {
	cy.LunchSite();
	
});

Then(/^User Login into Parabank$/, () => {
	return cy.LoginUser()
});

