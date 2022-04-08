$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/createAccount.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios billling website login functionality validation",
  "description": "",
  "id": "techfios-billling-website-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@NewAccount"
    }
  ]
});
formatter.before({
  "duration": 23293210698,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "newAccountStepsDefinition.user_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 2099440666,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should be able to login",
  "description": "",
  "id": "techfios-billling-website-login-functionality-validation;user-should-be-able-to-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@NAcct"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "newAccountStepsDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3453334697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "newAccountStepsDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3092054373,
  "status": "passed"
});
formatter.match({
  "location": "newAccountStepsDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 7180868971,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 5.000\n  (Session info: chrome\u003d100.0.4896.75)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027THEOJOS\u0027, ip: \u0027192.168.244.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.75, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\okikiade\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59179}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: db75255ec4bd0aade7bcf80e70a6e32d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat pages.LoginPage.clickSignInButton(LoginPage.java:40)\r\n\tat steps.newAccountStepsDefinition.user_clicks_on_signin_button(newAccountStepsDefinition.java:49)\r\n\tat ✽.When User clicks on signin button(features/createAccount.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "newAccountStepsDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1120745184,
  "status": "passed"
});
formatter.before({
  "duration": 9601455174,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "newAccountStepsDefinition.user_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 3148363974,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should be able to create account",
  "description": "",
  "id": "techfios-billling-website-login-functionality-validation;user-should-be-able-to-create-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@NAcct2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User Clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters accountTitle as \"Checking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enters description as \"new savings account\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enters initialBalance as \"$125\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User enters accountNumber as \"00065574274\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enters contactPerson As \"Bunmi\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User enters phone as \"616-469-7997\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User enters internetBankingURL as \"www.netcubetech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User enters Clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should be able to validate account created successful",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "newAccountStepsDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3087427943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "newAccountStepsDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3091682405,
  "status": "passed"
});
formatter.match({
  "location": "newAccountStepsDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 5093959874,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 5.000\n  (Session info: chrome\u003d100.0.4896.75)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027THEOJOS\u0027, ip: \u0027192.168.244.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.75, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\okikiade\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59263}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 610488ac40cc70f985ff302bc687f30c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat pages.LoginPage.clickSignInButton(LoginPage.java:40)\r\n\tat steps.newAccountStepsDefinition.user_clicks_on_signin_button(newAccountStepsDefinition.java:49)\r\n\tat ✽.When User clicks on signin button(features/createAccount.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "newAccountStepsDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "newAccountStepsDefinition.user_Clicks_on_newAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checking",
      "offset": 29
    }
  ],
  "location": "newAccountStepsDefinition.user_enters_accountTitle_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "new savings account",
      "offset": 28
    }
  ],
  "location": "newAccountStepsDefinition.user_enters_description_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$125",
      "offset": 31
    }
  ],
  "location": "newAccountStepsDefinition.user_enters_initialBalance_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "00065574274",
      "offset": 30
    }
  ],
  "location": "newAccountStepsDefinition.user_enters_accountNumber_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bunmi",
      "offset": 30
    }
  ],
  "location": "newAccountStepsDefinition.user_enters_contactPerson_As(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "616-469-7997",
      "offset": 22
    }
  ],
  "location": "newAccountStepsDefinition.user_enters_phone_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "www.netcubetech.com",
      "offset": 35
    }
  ],
  "location": "newAccountStepsDefinition.user_enters_internetBankingURL_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "newAccountStepsDefinition.user_enters_Clicks_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "newAccountStepsDefinition.user_should_be_able_to_validate_account_created_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9151192849,
  "status": "passed"
});
});