Feature: Open Tesco.com webpage 
  Scenario: User opens the tesco.com
    Given I open the homepage for Tesco
    When the page is fully loaded
    Then I should the tesco logo