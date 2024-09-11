package commonFunctions;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Date;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;

import com.google.common.io.FileWriteMode;

public class FunctionLibrary {
	public static WebDriver driver;
	public static Properties conpro;
	//method for launch browser
	public static WebDriver startBrowser() throws Throwable
	{
		conpro=new Properties();
		conpro.load(new FileInputStream("./PropertyFiles\\environmrnt.properties"));
		if(conpro.getProperty("Browser").equalsIgnoreCase("chrome"))
		{
			driver=new ChromeDriver();
			driver.manage().window().maximize();
		}
		else if(conpro.getProperty("Browser").equalsIgnoreCase("Firefox"))
		{
			driver=new FirefoxDriver();
		}
		else
		{
			Reporter.log("Browser value is not matching",true);
		}
		return driver;
	}
	//method for launch url
	public static void openUrl()
	{
		driver.get(conpro.getProperty("Url"));
	}
	//method for wait for any webelement
	public static void waitForElement(String LocatorType, String LocatorValue, String TestData)
	{
		WebDriverWait mywait=new WebDriverWait(driver,Duration.ofSeconds(Integer.parseInt(TestData)));
		if(LocatorType.equalsIgnoreCase("xpath"))
		{
			mywait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(LocatorValue)));
		}
		if(LocatorType.equalsIgnoreCase("name"))
		{
			mywait.until(ExpectedConditions.visibilityOfElementLocated(By.name(LocatorValue)));
		}
		if(LocatorType.equalsIgnoreCase("id"))
		{
			mywait.until(ExpectedConditions.visibilityOfElementLocated(By.id(LocatorValue)));
		}
	}
	//method for any textbox
	public static void typeAction(String LocatorType,String LocatorValue, String TestData)
	{
		if(LocatorType.equalsIgnoreCase("xpath"))
		{
			driver.findElement(By.xpath(LocatorValue)).clear();
			driver.findElement(By.xpath(LocatorValue)).sendKeys(TestData);
		}
		if(LocatorType.equalsIgnoreCase("id"))
		{
			driver.findElement(By.id(LocatorValue)).clear();
			driver.findElement(By.id(LocatorValue)).sendKeys(TestData);
		}
		if(LocatorType.equalsIgnoreCase("name"))
		{
			System.out.println(TestData);
			driver.findElement(By.name(LocatorValue)).clear();
			driver.findElement(By.name(LocatorValue)).sendKeys(TestData);
		}
	}
	// method for click elements like buttons, images,links,checkboxes and radio buttons
	public static void clickAction(String LocatorType,String LocatorValue) 
	{
		if(LocatorType.equalsIgnoreCase("xpath"))
		{
			driver.findElement(By.xpath(LocatorValue)).click();
		}
		if(LocatorType.equalsIgnoreCase("name"))
		{
			driver.findElement(By.name(LocatorValue)).click();
		}
		if(LocatorType.equalsIgnoreCase("id"))
		{
			driver.findElement(By.id(LocatorValue)).sendKeys(Keys.ENTER);
		}
	}
	//method for validating title
	public static void validateTitle(String Expected_Title)
	{
		String Actual_Title=driver.getTitle();
		try {
			Assert.assertEquals(Actual_Title, Expected_Title,"Title is not matching");
		}catch(Throwable t)
		{
			System.out.println(t.getMessage());
		}
	}
	//method for closing browser
	public static void closeBrowser()
	{
		driver.quit();
	}
	//method for generatedate
	public static String generateDate()
	{
		Date date=new Date();
		DateFormat df=new SimpleDateFormat("YY_MM_DD HH_MM_SS");
		return df.format(date);
	}
	//Method for selecting items in a listbox
	public static void dropDownAction(String LocatorType, String LocatorValue, String Testdata)
	{
		if(LocatorType.equalsIgnoreCase("xpath"))
		{
			int value=Integer.parseInt(Testdata);
			Select element=new Select(driver.findElement(By.xpath(LocatorValue)));
			element.selectByIndex(value);
		}
		if(LocatorType.equalsIgnoreCase("name"))
		{
			int value=Integer.parseInt(Testdata);
			Select element=new Select(driver.findElement(By.name(LocatorValue)));
			element.selectByIndex(value);
		}
		if(LocatorType.equalsIgnoreCase("id"))
		{
			int value=Integer.parseInt(Testdata);
			Select element=new Select(driver.findElement(By.id(LocatorValue)));
			element.selectByIndex(value);
		}
	}
	//method for capture stock number into notepad
	public static void captureStock(String LocatorType, String LocatorValue) throws Throwable
	{
		String stockNum="";
		if(LocatorType.equalsIgnoreCase("xpath"))
		{
			stockNum=driver.findElement(By.xpath(LocatorValue)).getAttribute("value");
		}
		if(LocatorType.equalsIgnoreCase("name"))
		{
			stockNum=driver.findElement(By.name(LocatorValue)).getAttribute("value");
		}
		if(LocatorType.equalsIgnoreCase("id"))
		{
			stockNum=driver.findElement(By.id(LocatorValue)).getAttribute("value");
		}
		//create notepad into capture data folder
		FileWriter fw= new FileWriter("./CaptureData/stockNumber.txt");
		BufferedWriter bw=new BufferedWriter(fw);
		bw.write(stockNum);
		bw.flush();
		bw.close();
	}		
	//verify stock number from stock table
	public static void stockTable() throws Throwable
	{
		//read stock number from above notepad
		FileReader fr=new FileReader("./CaptureData/stockNumber.txt");
		BufferedReader br=new BufferedReader(fr);
		//read stock number from above notepad
		String Exp_Data=br.readLine();
		if(!driver.findElement(By.xpath(conpro.getProperty("Search-textbox"))).isDisplayed())
			driver.findElement(By.xpath(conpro.getProperty("Search-pane"))).click();
		driver.findElement(By.xpath(conpro.getProperty("Search-textbox"))).clear();
		//enter stock number into tectbox
		driver.findElement(By.xpath(conpro.getProperty("Search-textbox"))).sendKeys(Exp_Data);
		//click search button
		driver.findElement(By.xpath(conpro.getProperty("Search-button"))).click();
Thread.sleep(3000);
String Act_Data=driver.findElement(By.xpath("//table[@class='table ewTable']/tbody/tr[1]/td[8]/div/span/span")).getText();
Reporter.log(Exp_Data+" "+Act_Data,true);
try {
Assert.assertEquals(Exp_Data, Act_Data,"Stock Number not matching");
	}catch(Throwable t)
{
		System.out.println(t.getMessage());
}
	}
	//method for capture supplier number into notepad
	public static void capturesup(String LocatorType, String LocatorValue) throws Throwable
	{
		String SupplierNum="";
		if(LocatorType.equalsIgnoreCase("xpath"))
		{
			SupplierNum=driver.findElement(By.xpath(LocatorValue)).getAttribute("value");
		}
		if(LocatorType.equalsIgnoreCase("name"))
		{
			SupplierNum=driver.findElement(By.name(LocatorValue)).getAttribute("value");
		}
		if(LocatorType.equalsIgnoreCase("id"))
		{
			SupplierNum=driver.findElement(By.id(LocatorValue)).getAttribute("value");
		}
		//create notepad and write supplier number
		FileWriter fw=new FileWriter("./CaptureData/SupplierNumber.txt");
		BufferedWriter bw=new BufferedWriter(fw);
		bw.write(SupplierNum);
		bw.flush();
		bw.close();
	}
	//method for verifying Supplier number in a table
		public static void supplierTable() throws Throwable
		{
	FileReader fr= new FileReader("./CaptureData/SupplierNumber.txt");
	BufferedReader br= new BufferedReader(fr);
	String Exp_Data= br.readLine();
	if(!driver.findElement(By.xpath(conpro.getProperty("Search-textbox"))).isDisplayed())
	{
		//click search panel is not displayed
		driver.findElement(By.xpath(conpro.getProperty("Search-panel"))).click();
		driver.findElement(By.xpath(conpro.getProperty("Search-textbox"))).clear();
		driver.findElement(By.xpath(conpro.getProperty("Search-textbox"))).sendKeys(Exp_Data);
		driver.findElement(By.xpath(conpro.getProperty("Search-button"))).click();
		Thread.sleep(3000);
		String Act_data=driver.findElement(By.xpath("//table[@class='table ewTable']/tbody/tr[1]/td[6]/div/span/span")).getText();
		Reporter.log(Exp_Data+" "+Act_data);
		try {
			Assert.assertEquals(Act_data, Exp_Data, "Supplier Number is not matching");
		} catch (Exception e) {
		System.out.println(e.getMessage());
		}
	}
	}
	//method for capture customer number into notepad
	public static void captureCus(String LocatorType, String LocatorValue) throws Throwable
	{
		String CustomerNum="";
		if(LocatorType.equalsIgnoreCase("xpath"))
		{
			CustomerNum=driver.findElement(By.xpath(LocatorValue)).getAttribute("value");
		}
		if(LocatorType.equalsIgnoreCase("name"))
		{
			CustomerNum=driver.findElement(By.name(LocatorValue)).getAttribute("value");
		}
		if(LocatorType.equalsIgnoreCase("id"))
		{
			CustomerNum=driver.findElement(By.id(LocatorValue)).getAttribute("value");
		}
		//create notepad and write supplier number
		FileWriter fw=new FileWriter("./CaptureData/CustomerNumber.txt");
		BufferedWriter bw=new BufferedWriter(fw);
		bw.write(CustomerNum);
		bw.flush();
		bw.close();
	}
	public static void customerTable() throws Throwable
	{
	//method for verifying Customer number in a table
	FileReader fr= new FileReader("D:\\Liveproject_11oclock\\ERP_Cucumber\\CaptureData\\CustomerNumber.txt");
	BufferedReader br= new BufferedReader(fr);
	String Exp_Data= br.readLine();
	if(!driver.findElement(By.xpath(conpro.getProperty("Search-textbox"))).isDisplayed())
	{
		//click search panel is not displayed
		driver.findElement(By.xpath(conpro.getProperty("Search-panel"))).click();
		driver.findElement(By.xpath(conpro.getProperty("Search-textbox"))).clear();
		driver.findElement(By.xpath(conpro.getProperty("Search-textbox"))).sendKeys(Exp_Data);
		driver.findElement(By.xpath(conpro.getProperty("Search-button"))).click();
		Thread.sleep(3000);
		String Act_data=driver.findElement(By.xpath("//table[@class='table ewTable']/tbody/tr[1]/td[5]/div/span/span")).getText();
		Reporter.log(Exp_Data+" "+Act_data);
		try {
			Assert.assertEquals(Act_data, Exp_Data, "Customer Number is not matching");
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	}
}

