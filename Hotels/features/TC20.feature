
Feature: Signup

Background: User is on Signup page

Given I am on hotels homepage
When I click on SignIn link
When I click on SignUp link

Scenario: Hotels: Verify Terms And Conditions link and Privacy Statements link open correct page on new tab
When I click Terms and Conditions link
Then I verify Terms and Conditions page opens in new tab
Then I verify Last Revised date format
When I click Privacy Statement link
Then I verify Privacy Statement page opens in new tab
Then I verify Last Updated date format