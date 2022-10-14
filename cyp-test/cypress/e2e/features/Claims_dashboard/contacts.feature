Feature: This feature ensures all the elements on Contacts page are working fine
# Background:
#     Given I am in home page
    # And I click on expense dashboard header

Scenario: Verify the legal dashboard header
    Given I am in home page
    When I click on dashboard header
    Then I verify i am on the dashboard page

Scenario: Verify the claim number search and type the value
    When the user clicks on Claim Number Search and type
    Then verify that the searched claim number shows correct results

Scenario: Verify the user is prompted to right screen after clicking on Claim number
    When the user clicks on the Claim
    Then verify that the user is prompted to Claim detail page

Scenario: verify Contacts page
    When the user clicks on the Contacts CTA
    Then verify that the user is prompted to Contacts page

Scenario: verify burger menu and its components
    When the user clicks on the burger menu on contacts page
    Then verify that the buger menu is displayed and contents showing are correct

Scenario: verify Add Claimant Contact cta
    When the user clicks on Add Claimant Contact cta
    Then verify that the Add Claimaint pop-up window is displayed 

Scenario: add new Claimant contact and verify the input fields and edit icon
    When the user enter details of Claimant contact and clicks on Submit button
    Then verify that the Claimant contact details should be added correctly
    And verify the edit icon on contacts

Scenario: verify Add Insured Contact cta
    When the user clicks on Add Insured Contact cta
    Then verify that the Add Insured pop-up window is displayed

Scenario: add new Insured contact and verify the input fields
    When the user enter details of Insured contact and clicks on Submit button
    Then verify that the Insured contact details should be added correctly

Scenario: verify Add Misc Contact cta
    When the user clicks on Add Misc Contact cta
    Then verify that the Add Misc pop-up window is displayed
    
Scenario: add new Misc contact and verify the input fields
    When the user enter details of Misc contact and clicks on Submit button
    Then verify that the Misc contact details should be added correctly

Scenario: verify Add Involved Party Contact cta
    When the user clicks on Add Involved Party Contact cta
    Then verify that the Add Involved Party pop-up window is displayed
    
Scenario: add new Involved contact and verify the input fields
    When the user enter details of Involved Party contact and clicks on Submit button
    Then verify that the Involved Party contact details should be added correctly

Scenario: verify Search For Contact cta
    When the user clicks on Search For Contact cta
    Then verify that the Search For Contact pop-up window is displayed

Scenario: search for contact and verify 
    When the user clicks on search bar and type the valid user name
    Then verify that the searched user is displayed correctly

Scenario: add searched contact and verify its fields
    When the user clicks on searched user
    Then verify that the searched user is added in contacts and showing correct details