Feature: Testing All Possible Action in Parabank

    Description: As a Client I want to be able to rgister into
    Parabank, have an account and run all possible functions

    Background: Client should Lunch the site
        Given Client lunch the correct Url of Parabank site

    Scenario: A user should be able to register, have an account and have access to all possible functionss within the site
        And Client click on the Register tab
        And Client fills in all single register details field with vaild data
            | FirstName | LastName | Address     | City  | State | Zipcode | PhoneNum    | SSN         |
            | Bright    | Stephen  | Golf Estate | Enugu | Enugu | 400102  | 08157439566 | 035-049-997 |
        And Client create username and password and confrim it for possible login
            | Username | Password   |
            | Uche9552  | 0909090414 |
        When Client click on the register button
        Then Client should see a welcome heading with his or her username
        When Client click on the paybills tab to make a payment
        Then Client should see a billpayment form
        And Client enters all valid data required and confrim account number
            | PayeeName  | Address        | City  | State | Zipcode | Phone       | Account | Amount |
            | Stephenson | 30 Golf Estate | Enugu | Enugu | 9001    | 09064371971 | 13566   | 50    |
        When Client click on the send payment button
        Then Client should have a successful payment confirmation text
        When  Client Click on the transfer tab
        Then Client should see the Transfer page
        And Client  enter amount to be transferd
            | Amount |
            | 100    |
        And Client confirm  account number
        When Client click on the transfer button
        Then Client should get a Transfer Complete text
        When Client click on the open new account tab
        Then Client should see a open account page title display
        And  Client select account type to be savings or checking
        And  Client confirms selected account number for withdrawal
        When Client click on open new account button
        Then Client should get a successful account opening
         When Client click on Request Loan tab
        Then Client should see a Apply for Loan title with an empty form
        And  Client fills the loan amount and down payment section
            | LoanAmount | Downpayment |
            | 200        | 50         |
        And Client verify account number
        When Client click on the Apply now button
        Then Client should get a Loan approved text page
        When Client click on the find tracsactions tab
        Then Client should see a find tracsactions heading with an empty form with various tracking method
        And  Client confirms the account number to be tracked
        And  Client select a find tracsactions method and fill the required data
        When Client click on the find transaction button
        Then Client should get a successful tracking page with details of tracsactions that has been made

