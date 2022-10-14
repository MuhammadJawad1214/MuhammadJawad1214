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

Scenario: Verify claim type is property on Claim Dashboard
    When the user click on claim type and select property
    Then verify that the claim type is selected to property and PILR tab is displayed

Scenario: verify PILR page
    When the user clicks on the PILR CTA
    Then verify that the user is prompted to PILR page

Scenario: verify burger menu on Pilr page and its components
    When the user clicks on the burger menu on Pilr page
    Then verify that the buger menu is showing correct deatils

Scenario: Click on create and verify that the the user is prompter to PILR Details page
    When the user clicks on the Create button
    Then verify that the user is prompted to PILR Details page

Scenario: Add details in PILR section and verify them
    When the user enter details in PILR Details section
    Then verify that the entered details are populated correctly in PILR Details

Scenario: Add details in Insured Information section and verify them
    When the user enter details in Insured Information Details section
    Then verify that the entered details are populated correctly in Insured Information

Scenario: Add details in Loss Information section and verify them
    When the user enter details in Loss Information Details section
    Then verify that the entered details are populated correctly in Loss Information

