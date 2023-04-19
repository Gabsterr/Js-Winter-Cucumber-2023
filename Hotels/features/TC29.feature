Feature: Hotel List Your property

  Background: User is on homepage
    Given I am on hotels homepage

  Scenario: Hotels Verify List your Property flow
    When I click on List your property
    Then I verify What would you like to list is displayed
    Then I verify Lodging option is displayed
    Then I verify Private residence option is displayed
    When I click on Private residence
    Then I verify Step 1 of 3 is displayed
    Then I verify See how much you could earn! is displayed
    When I enter 4 as bedroom
    When I enter 2.5 as bathroom
    When I click on Next button
    Then I verify Step 2 of 3 is displayed
    Then I verify Where is your property located is displayed
    When I enter "1216" in address
    When I select 1216 South Orange Blossom Trail, Orlando, FL, USA from auto-suggestion
    Then I verify graph is displayed
    Then I verify pin in graph is displayed
    Then I verify Move the pin to adjust the location of your property is displayed below graph
