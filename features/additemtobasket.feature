Feature: Add item to basket and checkout
	Scenario: User opens tesco.com, logs in, adds milk to the basket and checksout
		Given I am logged into tesco.com
			And I have searched for Milk
		When I click on the plus button
		Then the item should be in my basket
		