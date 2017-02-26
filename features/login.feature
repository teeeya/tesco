Feature: Open Tesco.com webpage and login
  Scenario: User opens the tesco.com and logs in with their own username and password
     Given I open the homepage for Tesco
     When I want to click on "Groceries"
      And click on sign in
      And enter my username and password
     Then I should be logged in