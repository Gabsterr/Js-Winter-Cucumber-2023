Feature: Hotel List Your property

Background: User is on homepage
Given I am on hotels homepage

Scenario: Hotels Verify List your Property flow
When I click on List your property
Then I verify What would you like to list is displayed
Then I verify “Lodging“ and “Private residence“ options are displayed
Click on “Private residence“
-> Verify ”Step 1 of 3” is displayed
-> Verify “See how much you could earn!” is displayed
Enter “4“ as bedroom
Enter “2.5“ as bathroom
Click on “Next” button
-> Verify ”Step 2 of 3” is displayed
-> Verify “Where is your property located?” is displayed
Enter “121” in address
Select “1211 6th Avenue, New York, NY, USA” from auto-suggestion
-> Verify graph is displayed
-> Verify pin in graph is displayed
-> Verify “Move the pin to adjust the location of your property.“ is displayed below graph