Feature: Search Page Filters


    Scenario: Validate that basic filter combinations return at least 5 pages of results.
    Given I navigate to perlego home page
    When I search for a book using the search bar
    And I filter the results of the searched parameter
    Then I validate that the filter combinations return at least 5 pages of results