Feature: Hotels Language

Background: User is on Homepage

Given I am on Hotels Homepage1

Scenario: Hotels Verify language can be changed successfully
When I click on English language link
When I select Español Estados Unidos in Language dropdown
When I click on Save button
Then I verify Español is displayed
When I click on Espanol language
When I select English United States in Language dropdown
When I click on Guardar button
Then I verify English is displayed