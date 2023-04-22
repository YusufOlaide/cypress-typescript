Feature: Create and Add a book to a workspace


    Scenario: Create a workspace, add a book to that workspace and make appropriate assertions that that book is added to that specific workspace​
    Given I navigate to Workspace Registration Link
    When I login my account previously registered
    Then I should be logged in
    When I add a book to a new workspace
    Then I should see and be able to navigate to the new workspace created
    And I should see the book added delete workspace
