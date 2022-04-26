package steps;

import org.openqa.selenium.support.PageFactory;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.DatabasePage;
import pages.ChangeBackgroungPage;
import pages.TestBase;

public class backGroundChangeStepsDefinition extends TestBase{
	
	
	
	DatabasePage databasePage;
	ChangeBackgroungPage changeBackgroungPage;
	
	
	@Before
	public void beforeRun() {
		initDriver();
		
		changeBackgroungPage = PageFactory.initElements(driver, ChangeBackgroungPage.class);
		databasePage = new DatabasePage();
	}
	@Given("^Set SkyBlue Background$")
	public void Set_SkyBlue_Background() {
	 driver.get("http://techfios.com/test/101/");
	}

	@When("^I click on the Set SkyBlue Background button$")
	public void I_click_on_the_Set_SkyBlue_Background_button() {
		changeBackgroungPage.clickSetSkyBlueBackgroundbutton();
	}

	@Then("^the background color will change to sky blue$")
	public void the_background_color_will_change_to_sky_blue()  {
		
	}
	
	@Given("^Set SkyWhite Background$")
	public void Set_SkyWhite_Background() {
	 driver.get("http://techfios.com/test/101/");
	}
	
	
	@When("^I click on the White Background button$")
	public void I_click_on_the_White_Background_button() {
		changeBackgroungPage.clickWhiteBackgroundbutton();
	}

	@Then("^the background color will change to white$")
	public void the_background_color_will_change_to_white()  {
	
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
	
}
