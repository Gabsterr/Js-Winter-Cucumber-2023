Feature: Hotel List Your property

Background: User is on homepage
Given I am on hotels homepage

Scenario: Hotels Verify List your Property flow
When I click on List your property
Then I verify What would you like to list is displayed
Then I verify Lodging and Private residence options are displayed
When I click on Private residence
Then I verify Step 1 of 3 is displayed
Then I verify See how much you could earn! is displayed
When I enter 4 as bedroom
When I enter 2.5 as bathroom
When I click on Next button
Then I verify Step 2 of 3 is displayed
Then I verify Where is your property located is displayed
When I enter "121" in address
When I select “1216 South Orange Blossom Trail, Orlando, FL, USA” from auto-suggestion
-> Verify graph is displayed
-> Verify pin in graph is displayed
-> Verify “Move the pin to adjust the location of your property.“ is displayed below graph