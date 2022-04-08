@NewAccount
Feature: Techfios billling website login functionality validation

Background: 
Given User is on Techfios login page

@NAcct
Scenario: User should be able to login
When User enters username as "demo@techfios.com" 
When User enters password as "abc123"
When User clicks on signin button
Then  User should land on dashboard page


@NAcct2
Scenario: User should be able to create account
When User enters username as "demo@techfios.com" 
When User enters password as "abc123"
When User clicks on signin button
Then  User should land on dashboard page
And User Clicks on newAccount
And User enters accountTitle as "Checking"
And User enters description as "new savings account"
And User enters initialBalance as "$125"
And User enters accountNumber as "00065574274"
And User enters contactPerson As "Bunmi"
And User enters phone as "616-469-7997"
And User enters internetBankingURL as "www.netcubetech.com"
And User enters Clicks on submit button
Then User should be able to validate account created successful