package steps;

import org.openqa.selenium.support.PageFactory;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.DatabasePage;
import pages.LoginPage;
import pages.NewAccountPage;
import pages.TestBase;

public class newAccountStepsDefinition extends TestBase{
	
	
	LoginPage loginPage;
	DatabasePage databasePage;
	NewAccountPage newAccountPage;
	
	@Before
	public void beforeRun() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		newAccountPage = PageFactory.initElements(driver, NewAccountPage.class);
		databasePage = new DatabasePage();
	}
	@Given("^User is on Techfios login page$")
	public void user_is_on_Techfios_login_page() {
	 driver.get("https://www.techfios.com/billing/?ng=admin/");
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) {
	loginPage.enterUserName(username);

	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) {
		loginPage.enterPassword(password);
	}

	@When("^User clicks on signin button$")
	public void user_clicks_on_signin_button() {
		loginPage.clickSignInButton();
	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page()  {
		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
		takeScreenshot(driver);
	}
	@And("^User Clicks on bankCash button$")
	public void user_Clicks_on_Bank_Cash_Button() {
	newAccountPage.clickBankCashButton();
	}
	
	@And("^User Clicks on newAccount$")
	public void user_Clicks_on_newAccount() {
		newAccountPage.clickBankCashButton();
	}
	

	@And("^User enters accountTitle as \"([^\"]*)\"$")
	public void user_enters_accountTitle_as(String accountTitle)  {
		newAccountPage.enterAccountTitle(accountTitle);
	}

	@And("^User enters description as \"([^\"]*)\"$")
	public void user_enters_description_as(String description)  {
		newAccountPage.enterDescription(description);
	}

	@And("^User enters initialBalance as \"([^\"]*)\"$")
	public void user_enters_initialBalance_as(String initialBalance)  {
		newAccountPage.enterInitialBalance(initialBalance);
	}

	@And("^User enters accountNumber as \"([^\"]*)\"$")
	public void user_enters_accountNumber_as(String accountNumber) {
		newAccountPage.enterAccountNumber(accountNumber);
	}

	@And("^User enters contactPerson As \"([^\"]*)\"$")
	public void user_enters_contactPerson_As(String contactPerson) {
		newAccountPage.enterContactPerson(contactPerson);
	}

	@And("^User enters phone as \"([^\"]*)\"$")
	public void user_enters_phone_as(String phone) {
		newAccountPage.enterPhone(phone);
	}

	@And("^User enters internetBankingURL as \"([^\"]*)\"$")
	public void user_enters_internetBankingURL_as(String internetBankingURL) {
		newAccountPage.enterInternetBankingURL(internetBankingURL);
	}

	@And("^User enters Clicks on submit button$")
	public void user_enters_Clicks_on_submit_button() {
		newAccountPage.clickSubmitButton();
		
		
	}

	@Then("^User should be able to validate account created successful$")
	public void user_should_be_able_to_validate_account_created_successful() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
	
}
