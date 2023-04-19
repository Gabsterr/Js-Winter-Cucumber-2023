Feature: Updating guests on Homepage

  Background: User launches Hotels homepage
    Given I launch Hotels homepage

  Scenario: Hotels : Verify user can update number of guests on Home page
    When I click on Travelers
    When I select Adults as 6
    When I select Children as 3
    When I select first child as age 4
    When I select second child age under 1
    When I select third child age 7
    When I click Done
    Then I verify total number of Travelers is sum of adults and children as same as selected on steps 3 and 4
