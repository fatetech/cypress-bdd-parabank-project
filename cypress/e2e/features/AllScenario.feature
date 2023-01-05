Feature: Testing all possible site actions

    User should be able to navigate through the
    site and run all possible functions in his account

    Background: User should lunch the site
        Given User lunch the site url

    Scenario: Successful registration with login access
        And User fills in his or her details and create a username and password
        When User click the Register Button
        Then User should get a welcome note

    Scenario: User Paybills and have a successful Transaction
        And User Login into Parabank
        And User click on the paybills link
        Then User should see a billpayment form
        And User fills in all payee information details fields with valid data
        When User click on the send payment button
        Then User should a successful payment confirmation note

    Scenario: User should successfuly make a Transfer transaction
        And User Login into Parabank
        And  User Click on the transfer link
        Then User should see the Transfer page
        And User should enter amount to be transferd
        And User should confirm his account number
        When User click on the transfer button
        Then User should get a Transfer Complete Note

    Scenario: User should successfuly create a new user account

        And User Login into Parabank
        When User click on the open new account link
        Then User should see a open account page title display
        And User select account type to be savings or checking
        And User confirms selected account number of withdrawal
        When User click on open new account button
        Then User should get a successful account opening

    Scenario: User should Successful request a Loan
        And User Login into Parabank
        And User click on Request Loan link
        Then User should see a Aplly for Loan title with an empty form
        And User fill the form with valid data
        When User click on the Apply now button
        Then User should get a Loan approved text page


    Scenario: Tracking all accounts tracsactions
        And User Login into Parabank
        When User click on the find tracsactions link
        Then User should see find tracsactions heading and empty form
        And User select and confirms the account number to be tracked
        And User select tracsactions method and fill the required data
        When User click on the find transaction button
        Then User should get a successful tracking page with details of tracsactions been made


