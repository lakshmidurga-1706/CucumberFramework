@tag
Feature:
Validate Stock and Suppliers and Cusotmer Modules
@supplier
Scenario Outline:
Validate supplier with multiple set of data
Given Launch Browser
When Launch URL
When wait for username with "xpath" and "//input[@id='username']"
When Enter username with "name" and "username" and "admin"
And Enter password with "xpath" and "//input[@id='password']" and "master"
When Click login button with "id" and "btnsubmit"
When wait for logout link with "xpath" and "(//a[starts-with(text(),' Logout')])[2]"
When Wait for supplier link with "xpath" and "(//a[contains(text(),'Suppliers')])[2]"
When click supplier link with "xpath" and "(//a[contains(text(),'Suppliers')])[2]"
When wait for ADD icon with "xpath" and "(//span[@data-caption='Add'])[1]"
When click add icon button with "xpath" and "(//span[@data-caption='Add'])[1]"
When Wait for supplier Number with "name" and "x_Supplier_Number"
When Capture supliler Number with "name" and "x_Supplier_Number"
When Enter in "x_Supplier_Name" with "name" and "<SupplierName>" 
When Enter in "x_Address" with "name" and "<address>"
When Enter in "x_City" with "name" and "<city>"
When Enter in "x_Country" with "name" and "<country>"
When Enter in "x_Contact_Person" with "name" and "<cperson>"
When Enter in "x_Phone_Number" with "name" and "<pnumber>"
When Enter in "x__Email" with "name" and "<mail>"
When Enter in "x_Mobile_Number" with "name" and "<mnumber>"
When Enter in "x_Notes" with "name" and "<note>"
When click add icon button with "id" and "btnAction"
When Wait for Click Ok Button with "xpath" and "//button[normalize-space()='OK!']"
When Confirm Ok Button with "xpath" and "//button[normalize-space()='OK!']"
When Wait for Alert Ok Button with "xpath" and "(//button[starts-with(text(),'OK')])[6]"
When Click Alert ok button with "xpath" and "(//button[starts-with(text(),'OK')])[6]"
When Verify Supplier Number
When Click logout button with "xpath" and "(//a[starts-with(text(),' Logout')])[2]"
When close Browser
Examples:
|SupplierName|address|city|country|cperson|pnumber|mail|mnumber|note|
|selenim1|	srnagar1|	Hyderabad|	India|	Qedge31|6547895412|test@gmail.com|6321456987|New Supplier Adding|
|selenim41|	srnagar71|	Hyderabad|	India|	Qedge351|6547895412|test@gmail.com|6321456987|New Supplier Adding|
|selenim143|	srnagar132|	Hyderabad|	India|	Qedge361|6547895412|test@gmail.com|6321456987|New Supplier Adding|
|selenim132|	srnagar51|	Hyderabad|	India|	Qedge371|6547895412|test@gmail.com|6321456987|New Supplier Adding|
|selenim45|	srnagar51|	Hyderabad|	India|	Qedge317|6547895412|test@gmail.com|6321456987|New Supplier Adding|

@customer
Scenario Outline:
Validate customer with multiple set of data
Given Launch Browser
When Launch URL
When wait for username with "xpath" and "//input[@id='username']"
When Enter username with "name" and "username" and "admin"
And Enter password with "xpath" and "//input[@id='password']" and "master"
When Click login button with "id" and "btnsubmit"
When wait for logout link with "xpath" and "(//a[starts-with(text(),' Logout')])[2]"
When Wait for customer link with "xpath" and "(//a[contains(text(),'Customers')])[2]"
When click Customer link with "xpath" and "(//a[contains(text(),'Customers')])[2]"
When wait for ADD icon with "xpath" and "(//span[@data-caption='Add'])[1]"
When click add icon button with "xpath" and "(//span[@data-caption='Add'])[1]"
When Wait for customer Number with "name" and "x_Customer_Number"
When Capture customer Number with "name" and "x_Customer_Number"
When Enter in "x_Customer_Name" with "name" and "<CustomerName>"
When Enter in "x_Address" with "name" and "<address>"
When Enter in "x_City" with "name" and "<city>"
When Enter in "x_Country" with "name" and "<country>"
When Enter in "x_Contact_Person" with "name" and "<cperson>"
When Enter in "x_Phone_Number" with "name" and "<pnumber>"
When Enter in "x__Email" with "name" and "<mail>"
When Enter in "x_Mobile_Number" with "name" and "<mnumber>"
When Enter in "x_Notes" with "name" and "<note>"
When click add icon button with "id" and "btnAction"
When Wait for Click Ok Button with "xpath" and "//button[normalize-space()='OK!']"
When Confirm Ok Button with "xpath" and "//button[normalize-space()='OK!']"
When Wait for Alert Ok Button with "xpath" and "(//button[starts-with(text(),'OK')])[6]"
When Click Alert ok button with "xpath" and "(//button[starts-with(text(),'OK')])[6]"
When Verify Customer Number
When click logout with "xpath" and "(//a[starts-with(text(),' Logout')])[2]"
When Close Browser
Examples:
|CustomerName|address|city|country|cperson|pnumber|mail|mnumber|note|
|Akhil1|	Ameerpet1|	Hyderabad|	India|	Qedge1|6547895412|test@gmail.com|6321456987|New Customer Adding|
|Akhil4|	Ameerpet6|	Hyderabad|	India|	Qedge18|6547895412|test@gmail.com|6321456987|New Customer Adding|
|Akhil5|	Ameerpet15|	Hyderabad|	India|	Qedge15|6547895412|test@gmail.com|6321456987|New Customer Adding|
|Akhil6|	Ameerpet187|	Hyderabad|	India|	Qedge156|6547895412|test@gmail.com|6321456987|New Customer Adding|
|Akhil154|	Ameerpet156|	Hyderabad|	India|	Qedge1567|6547895412|test@gmail.com|6321456987|New Customer Adding|






 























