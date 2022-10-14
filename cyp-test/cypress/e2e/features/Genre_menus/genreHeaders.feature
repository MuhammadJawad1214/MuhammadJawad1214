Feature: This feature ensures all the headers in genre app is working fine
Background:
    Given I am in home page

Scenario: Verify the legal dashboard header
    When I click on legal dashboard header
    Then I verify i am on the legal dashboard

Scenario: Verify the accounting dashboard header
    When I click on accounting dashboard header
    Then I verify i am on the accounting dashboard

Scenario: Verify the expense dashboard header
    When I click on expense dashboard header
    Then I verify i am on the expense dashboard
    And I click on dashboard header

Scenario: Verify the default dashboard header
    When I click on dashboard header
    Then I verify i am on the dashboard page