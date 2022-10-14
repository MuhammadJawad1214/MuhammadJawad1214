Feature: test feature
Background:
    Given I am in home page

Scenario: Scenario name abc
    When I insert username as "as" and password as "asd"
    When I click on login button
    Then I verify i am logged in sucessfully

# Scenario Outline: Scenario Outline abc
#     When I insert username as "username" and password as "password"
#     When I click on login button
#     Then I verify i am logged in sucessfully

#     Examples:
#     | username | password |
#     | mujawad  |  abcd    |


