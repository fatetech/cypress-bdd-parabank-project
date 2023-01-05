import './commands'
import './CustomCommand/Register.Acction.spec'
import './CustomCommand/LoginActions.spec'
import './CustomCommand/OverviewAction.spec'
import './CustomCommand/TransferAction.spec'
import './CustomCommand/PayBillsAction.spec'
import './CustomCommand/Tracking.spec'
import './CustomCommand/LoanAction.spec'
import './CustomCommand/OpenNewAcct.spec'
import 'cypress-mochawesome-reporter/register';





Cypress.on('uncaught:exception', () => {
    return false
})
