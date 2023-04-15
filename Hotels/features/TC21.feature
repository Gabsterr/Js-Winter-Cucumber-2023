Feature: Hotels: Signin

Background: User goes from Homepage to Signin Page

Given I am on the hotels homepage
When I click on Signin link

Scenario: Hotels: Verify Verification message for invalid sign in credentials
When I click on Sign in button
When I enter "#nbw1" invalid email address
When I click on Continue button
Then I verify error message is displayed

