$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Featurefiles/ERPStock.feature");
formatter.feature({
  "name": "",
  "description": "Validate Stock and Suppliers and Cusotmer Modules",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "Validate customer with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@customer"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "name": "Launch URL",
  "keyword": "When "
});
formatter.step({
  "name": "wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "click Customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for ADD icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "name": "click add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.step({
  "name": "Capture customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"x_Customer_Name\" with \"name\" and \"\u003cCustomerName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"x_Address\" with \"name\" and \"\u003caddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"x_City\" with \"name\" and \"\u003ccity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"x_Country\" with \"name\" and \"\u003ccountry\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"x_Contact_Person\" with \"name\" and \"\u003ccperson\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"x_Phone_Number\" with \"name\" and \"\u003cpnumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"x__Email\" with \"name\" and \"\u003cmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"x_Mobile_Number\" with \"name\" and \"\u003cmnumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"x_Notes\" with \"name\" and \"\u003cnote\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click add icon button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Click Ok Button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Confirm Ok Button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Alert Ok Button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Verify Customer Number",
  "keyword": "When "
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "CustomerName",
        "address",
        "city",
        "country",
        "cperson",
        "pnumber",
        "mail",
        "mnumber",
        "note"
      ]
    },
    {
      "cells": [
        "Akhil1",
        "Ameerpet1",
        "Hyderabad",
        "India",
        "Qedge1",
        "6547895412",
        "test@gmail.com",
        "6321456987",
        "New Customer Adding"
      ]
    },
    {
      "cells": [
        "Akhil4",
        "Ameerpet6",
        "Hyderabad",
        "India",
        "Qedge18",
        "6547895412",
        "test@gmail.com",
        "6321456987",
        "New Customer Adding"
      ]
    },
    {
      "cells": [
        "Akhil5",
        "Ameerpet15",
        "Hyderabad",
        "India",
        "Qedge15",
        "6547895412",
        "test@gmail.com",
        "6321456987",
        "New Customer Adding"
      ]
    },
    {
      "cells": [
        "Akhil6",
        "Ameerpet187",
        "Hyderabad",
        "India",
        "Qedge156",
        "6547895412",
        "test@gmail.com",
        "6321456987",
        "New Customer Adding"
      ]
    },
    {
      "cells": [
        "Akhil154",
        "Ameerpet156",
        "Hyderabad",
        "India",
        "Qedge1567",
        "6547895412",
        "test@gmail.com",
        "6321456987",
        "New Customer Adding"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "Validate customer with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@customer"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch URL",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.launch_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_username_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for ADD icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_ADD_icon_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.capture_customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Customer_Name\" with \"name\" and \"Akhil1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Address\" with \"name\" and \"Ameerpet1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_City\" with \"name\" and \"Hyderabad\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Country\" with \"name\" and \"India\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Contact_Person\" with \"name\" and \"Qedge1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Phone_Number\" with \"name\" and \"6547895412\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x__Email\" with \"name\" and \"test@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Mobile_Number\" with \"name\" and \"6321456987\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Notes\" with \"name\" and \"New Customer Adding\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add icon button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Click Ok Button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_Click_Ok_Button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirm Ok Button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.confirm_Ok_Button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert Ok Button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_Alert_Ok_Button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Customer Number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.verify_Customer_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "",
  "description": "Validate customer with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@customer"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch URL",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.launch_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_username_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for ADD icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_ADD_icon_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.capture_customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Customer_Name\" with \"name\" and \"Akhil4\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Address\" with \"name\" and \"Ameerpet6\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_City\" with \"name\" and \"Hyderabad\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Country\" with \"name\" and \"India\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Contact_Person\" with \"name\" and \"Qedge18\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Phone_Number\" with \"name\" and \"6547895412\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x__Email\" with \"name\" and \"test@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Mobile_Number\" with \"name\" and \"6321456987\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Notes\" with \"name\" and \"New Customer Adding\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add icon button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Click Ok Button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_Click_Ok_Button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirm Ok Button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.confirm_Ok_Button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert Ok Button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_Alert_Ok_Button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Customer Number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.verify_Customer_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "",
  "description": "Validate customer with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@customer"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch URL",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.launch_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_username_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for ADD icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_ADD_icon_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.capture_customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Customer_Name\" with \"name\" and \"Akhil5\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Address\" with \"name\" and \"Ameerpet15\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_City\" with \"name\" and \"Hyderabad\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Country\" with \"name\" and \"India\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Contact_Person\" with \"name\" and \"Qedge15\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Phone_Number\" with \"name\" and \"6547895412\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x__Email\" with \"name\" and \"test@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Mobile_Number\" with \"name\" and \"6321456987\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Notes\" with \"name\" and \"New Customer Adding\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add icon button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Click Ok Button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_Click_Ok_Button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirm Ok Button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.confirm_Ok_Button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert Ok Button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_Alert_Ok_Button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Customer Number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.verify_Customer_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "",
  "description": "Validate customer with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@customer"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch URL",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.launch_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_username_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for ADD icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_ADD_icon_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.capture_customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Customer_Name\" with \"name\" and \"Akhil6\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Address\" with \"name\" and \"Ameerpet187\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_City\" with \"name\" and \"Hyderabad\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Country\" with \"name\" and \"India\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Contact_Person\" with \"name\" and \"Qedge156\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Phone_Number\" with \"name\" and \"6547895412\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x__Email\" with \"name\" and \"test@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Mobile_Number\" with \"name\" and \"6321456987\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Notes\" with \"name\" and \"New Customer Adding\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add icon button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Click Ok Button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_Click_Ok_Button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirm Ok Button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.confirm_Ok_Button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert Ok Button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_Alert_Ok_Button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Customer Number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.verify_Customer_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "",
  "description": "Validate customer with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@customer"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch URL",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.launch_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_username_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for ADD icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_ADD_icon_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.capture_customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Customer_Name\" with \"name\" and \"Akhil154\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Address\" with \"name\" and \"Ameerpet156\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_City\" with \"name\" and \"Hyderabad\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Country\" with \"name\" and \"India\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Contact_Person\" with \"name\" and \"Qedge1567\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Phone_Number\" with \"name\" and \"6547895412\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x__Email\" with \"name\" and \"test@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Mobile_Number\" with \"name\" and \"6321456987\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"x_Notes\" with \"name\" and \"New Customer Adding\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add icon button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Click Ok Button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_Click_Ok_Button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirm Ok Button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.confirm_Ok_Button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert Ok Button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.wait_for_Alert_Ok_Button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Customer Number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.verify_Customer_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});