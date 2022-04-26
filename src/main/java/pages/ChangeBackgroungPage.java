package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class ChangeBackgroungPage {

	WebDriver driver;
	 public ChangeBackgroungPage(WebDriver driver) {
	  this.driver = driver;
	 }
	 // Element Library
	 @FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[1]")
	 WebElement SetSkyBlueBackgroundbutton;
	 @FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[2]")
	 WebElement WhiteBackgroundbutton;
	 

	 // Methods to interact with the elements
	 public void clickSetSkyBlueBackgroundbutton()   {
		 SetSkyBlueBackgroundbutton.click();  
	   try {
		Thread.sleep(3000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}  
	 }
	 public void clickWhiteBackgroundbutton()   {
		 WhiteBackgroundbutton.click();  
	   try {
		Thread.sleep(3000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}  
	 }
	 
}