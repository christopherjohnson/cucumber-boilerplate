Feature: Visit Accounting Seed
    As a developer
    I want the demo app have the correct title

    Background:
        Given I open the site "/"

    Scenario: access Accounting Seed
        Then I expect that the title contains "Salesforce"
