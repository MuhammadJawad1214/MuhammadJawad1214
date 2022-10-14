Feature: This feature ensures all the litigation management elements
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

Scenario: Verify the lititgation Management page
    When the user clicks on the litigation mgt CTA
    Then verify that the user is prompted to Litigation Management page

# Scenario: Verify the Arbitration date on Litigation page
#     When the user clicks on Arbitration Date and select the date
#     Then the Arbitration Date should be populated correctly

# Scenario: Verify the Meditation date on Litigation page
#     When the user clicks on Meditation Date and select the date
#     Then the Meditation Date should be populated correctly

# Scenario: Verify the Trial date on Litigation page
#     When the user clicks on trial Date and select the date
#     Then the trial Date should be populated correctly

Scenario: Verify the Budget Requested date on Litigation page
    When the user clicks on Budget Requested Date and select the date
    Then the Budget Requested Date should be populated correctly

# Scenario: Verify the Budget Received date on Litigation page
#     When the user clicks on Budget Received Date and select the date
#     Then the Budget Received Date should be populated correctly