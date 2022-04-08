package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class NewAccountPage {

	WebDriver driver;
	 public NewAccountPage(WebDriver driver) {
	  this.driver = driver;
	 }
	 // Element Library
	 @FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a/span[1]")
	 WebElement BankCashButton;
	 @FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")
	 WebElement NewAccountButton;
	 @FindBy(how = How.XPATH, using = "//*[@id=\"account\"]")
	 WebElement AccountTitle;
	 @FindBy(how = How.XPATH, using = "//*[@id=\"description\"]")
	 WebElement Description;
	 @FindBy(how = How.XPATH, using = "//*[@id=\"balance\"]")
	 WebElement InitialBalance;
	 @FindBy(how = How.XPATH, using = "//*[@id=\"account_number\"]")
	 WebElement AccountNumber;
	 @FindBy(how = How.XPATH, using = "//*[@id=\"contact_person\"]")
	 WebElement ContactPerson;
	 @FindBy(how = How.XPATH, using = "//*[@id=\"contact_phone\"]")
	 WebElement Phone;
	 @FindBy(how = How.XPATH, using = "//*[@id=\"ib_url\"]")
	 WebElement InternetBankingURL;
	 @FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")
	 WebElement SubmitButton;

	 // Methods to interact with the elements
	 public void clickBankCashButton()   {
		 BankCashButton.click();  
	   try {
		Thread.sleep(3000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}  
	 }
	 public void clicknewAccountButton()   {
		 NewAccountButton.click();  
	   try {
		Thread.sleep(3000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}  
	 }
	 
	 public void enterAccountTitle(String accountTitle)  {
		 AccountTitle.sendKeys(accountTitle);
	  try {
		Thread.sleep(3000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}  
	 }
	 public void enterDescription(String description)  {
		 Description.sendKeys(description);
	  try {
		Thread.sleep(3000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}  
	 }
	 
	 public void enterInitialBalance(String initialBalance)  {
		 InitialBalance.sendKeys(initialBalance);
	  try {
		Thread.sleep(3000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}  
	 }
	 public void enterAccountNumber(String accountNumber)  {
		 AccountNumber.sendKeys(accountNumber);
	  try {
		Thread.sleep(3000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}  
	 }
	 public void enterContactPerson(String contactPerson)  {
		 ContactPerson.sendKeys(contactPerson);
	  try {
		Thread.sleep(3000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}  
	 } 
	 
	 public void enterPhone(String phone)  {
		 Phone.sendKeys(phone);
	  try {
		Thread.sleep(3000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}  
	 } 
	 
	 public void enterInternetBankingURL(String internetBankingURL)  {
		 InternetBankingURL.sendKeys(internetBankingURL);
	  try {
		Thread.sleep(3000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}  
	 } 
		 
	 public void clickSubmitButton() {
		 SubmitButton.click();
	  try {
		Thread.sleep(3000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}  
	 } 
	 public String getPageTitle() {
	  return driver.getTitle();
	 }
	
}
