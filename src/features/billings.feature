Feature: Billings
    As a developer
    I want to validate a user cannot delete a posted billing
    I want to validate a posted billing cannot be deleted

    #Background:
    #Given I open the site "/lightning/o/AcctSeed__Billing__c/list?filterName=Recent"
    #And I wait on element "a[title='00000000']" for 10000ms to be enabled

    Scenario: Validate a billing cannot be posted with no lines
        Given I open the site "/lightning/o/AcctSeed__Billing__c/list?filterName=Recent"
        And I wait on element "a[title='00000000']" for 10000ms to be enabled
        When I click on the link "00000000"
        And I wait on element "div[title='Post']" for 10000ms to be enabled
        And I click on the link "Post"
        And I wait on element "[name*='vfFrameId']" for 10000ms to be enabled
        And I switch the frame to "[name*='vfFrameId']"
        And I wait on element ".messageCell" for 10000ms to be enabled
        Then I expect that element ".messageCell" contains the text "There are no billing lines to post"

    Scenario: Validate a posted billing cannot be deleted
        Given I open the site "/lightning/o/AcctSeed__Billing__c/list?filterName=Recent"
        And I wait on element "a[title='00000001']" for 10000ms to be enabled
        When I click on the link "00000001"
        And I wait on element "div[title='Delete']" for 10000ms to be enabled
        And I click on the link "Delete"
        And I wait on element ".modal-container.slds-modal__container" for 10000ms to be enabled
        And I click on the button "button[title='Delete']"
        And I wait on element ".detail.slds-text-align--center" for 10000ms to be enabled
        Then I expect that element ".detail.slds-text-align--center" contains the text "You cannot delete a posted record."