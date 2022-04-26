@ChangeBackground
Feature: Techfios test background light functionality validation

   
  @Background1
  Scenario Outline: Sky Blue Background
  	Given Set SkyBlue Background
    When I click on the Set SkyBlue Background button
    Then the background color will change to sky blue

  @Background2
  Scenario Outline: White Background Change
  	Given Set SkyWhite Background
    When I click on the White Background button
    Then the background color will change to white

    
    
    