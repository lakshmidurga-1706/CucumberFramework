package stepDefination;

import commonFunctions.FunctionLibrary;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class StepDefination extends FunctionLibrary{
	@Given("Launch Browser")
	public void launch_Browser() throws Throwable {
	    driver=FunctionLibrary.startBrowser();
	}

	@When("Launch URL")
	public void launch_URL() {
	    FunctionLibrary.openUrl();
	}

	@When("wait for username with {string} and {string}")
	public void wait_for_username_with_and(String LocatorType, String LocatorValue) {
	    FunctionLibrary.waitForElement(LocatorType, LocatorValue, "10");
	}

	@When("Enter username with {string} and {string} and {string}")
	public void enter_username_with_and_and(String locatorType, String LocatorValue, String TestData) {
	    FunctionLibrary.typeAction(locatorType, LocatorValue, TestData);
	}

	@When("Enter password with {string} and {string} and {string}")
	public void enter_password_with_and_and(String locatorType, String LocatorValue, String TestData) {
	   FunctionLibrary.typeAction(locatorType, LocatorValue, TestData);
	}

	@When("Click login button with {string} and {string}")
	public void click_login_button_with_and(String LocatorType, String LocatorValue) {
	    FunctionLibrary.clickAction(LocatorType, LocatorValue);
	}

	@When("wait for logout link with {string} and {string}")
	public void wait_for_logout_link_with_and(String LocatorType, String LocatorValue) {
		FunctionLibrary.waitForElement(LocatorType, LocatorValue, "10");
	}

	@When("Wait for supplier link with {string} and {string}")
	public void wait_for_supplier_link_with_and(String LocatorType, String LocatorValue) {
		FunctionLibrary.waitForElement(LocatorType, LocatorValue, "10");
	}

	@When("click supplier link with {string} and {string}")
	public void click_supplier_link_with_and(String LocatorType, String LocatorValue) {
	 FunctionLibrary.clickAction(LocatorType, LocatorValue);
	}

	@When("wait for ADD icon with {string} and {string}")
	public void wait_for_ADD_icon_with_and(String LocatorType, String LocatorValue) {
		FunctionLibrary.waitForElement(LocatorType, LocatorValue, "10");
	}

	@When("click add icon button with {string} and {string}")
	public void click_add_icon_button_with_and(String LocatorType, String LocatorValue) {
		FunctionLibrary.clickAction(LocatorType, LocatorValue);
	}

	@When("Wait for supplier Number with {string} and {string}")
	public void wait_for_supplier_Number_with_and(String LocatorType, String LocatorValue) {
		FunctionLibrary.waitForElement(LocatorType, LocatorValue, "10");
	}

	@When("Capture supliler Number with {string} and {string}")
	public void capture_supliler_Number_with_and(String LocatorType, String LocatorValue) throws Throwable {
	    FunctionLibrary.capturesup(LocatorType, LocatorValue);
	}

	@When("Enter in {string} with {string} and {string}")
	public void enter_in_with_and(String LocatorValue, String LocatorType, String TestData) {
	    FunctionLibrary.typeAction(LocatorType, LocatorValue, TestData);
	}

	@When("Wait for Click Ok Button with {string} and {string}")
	public void wait_for_Click_Ok_Button_with_and(String LocatorType, String LocatorValue) {
		FunctionLibrary.waitForElement(LocatorType, LocatorValue, "10");
	}

	@When("Confirm Ok Button with {string} and {string}")
	public void confirm_Ok_Button_with_and(String LocatorType, String LocatorValue) {
		FunctionLibrary.clickAction(LocatorType, LocatorValue);
	}

	@When("Wait for Alert Ok Button with {string} and {string}")
	public void wait_for_Alert_Ok_Button_with_and(String LocatorType, String LocatorValue) {
		FunctionLibrary.waitForElement(LocatorType, LocatorValue, "10");
	}

	@When("Click Alert ok button with {string} and {string}")
	public void click_Alert_ok_button_with_and(String LocatorType, String LocatorValue) {
		FunctionLibrary.clickAction(LocatorType, LocatorValue);
	}

	@When("Verify Supplier Number")
	public void verify_Supplier_Number() throws Throwable {
	    FunctionLibrary.supplierTable();
	}

	@When("Click logout button with {string} and {string}")
	public void click_logout_button_with_and(String LocatorType, String LocatorValue) {
		FunctionLibrary.clickAction(LocatorType, LocatorValue);
	}

	@When("close Browser")
	public void close_Browser() {
	  FunctionLibrary.closeBrowser();
	}

	@When("Wait for customer link with {string} and {string}")
	public void wait_for_customer_link_with_and(String LocatorType, String LocatorValue) {
		FunctionLibrary.waitForElement(LocatorType, LocatorValue, "10");
	}

	@When("click Customer link with {string} and {string}")
	public void click_Customer_link_with_and(String LocatorType, String LocatorValue) {
	    FunctionLibrary.clickAction(LocatorType, LocatorValue);
	}

	@When("Wait for customer Number with {string} and {string}")
	public void wait_for_customer_Number_with_and(String LocatorType, String LocatorValue) {
		FunctionLibrary.waitForElement(LocatorType, LocatorValue, "10");
	}

	@When("Capture customer Number with {string} and {string}")
	public void capture_customer_Number_with_and(String LocatorType, String LocatorValue) throws Throwable {
	  FunctionLibrary.captureCus(LocatorType, LocatorValue);
	}
	@When("Verify Customer Number")
	public void verify_Customer_Number() throws Throwable {
	   FunctionLibrary.customerTable();
	}

}
