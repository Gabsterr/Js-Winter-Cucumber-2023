Feature: Signup

Scenario: Hotels: Verify error message for invalid data in SignUp form
    Given I am on Hotels homepage
    When I click on SignIn link
    When I click on SignUp link
    When I enter "#!@###" as invalid email address
    When I click Continue button
    Then I verify error "Enter a valid email" is displayed 
    Then I verify “Continue” button is enabled

