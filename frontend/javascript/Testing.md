👉🏼 Do you use Postman for your API Testing?

👉🏼 Are you executing testing all the APIs manually? 🤕

Then in this post let me enlighten you with an amazing hack that you can use for API Testing ✨


👉🏼 Whether you are a Developer or tester Postman is one of the User-friendly tools when it comes to performing black box testing of the APIs.


To automate Postman collection you will need 4 main tools 🔧 🔨:
1. Newman
2. Newman-reporter-HTML extra
3. A remote Repository
4. Jenkins

This diagram shows step by step guide for implementing the same.

Advantages for Postman Automation 😍:

1. Health Check of APIs ✔️
2. Black Box Testing of APIs automated ✔️
3. Easy Implementation and Better ROI ✔️
4. E2E Flow Automation ✔️

Drawbacks for Postman Automation😖 :

1. Difficulty in maintaining master test Data ❌
2. TestData has to be in CSV format ❌
3. Cannot validate database table ❌

⚠️ There is also a paid feature for the same in Postman but I am pretty sure most of us use Postman as freeware!




Checklist for Testing of 
Web Application
Web Testing in simple terms is checking your web application for potential bugs before its made live or before code is moved into the production environment.
During this stage issues such as that of web application security, the functioning of 
the site, its access to regular users and its ability to handle traffic is checked.
Functionality Testing
What is Functional Testing ?
01. Testing the features and operational behavior of a product to ensure they correspond to its specifications.
02. Testing that ignores the internal mechanism of a system or component and focuses solely on the outputs generated in response to selected inputs and execution 
conditions.
Goal of Functional Testing :
The goal of Functional Testing is to verify whether your product meets the intended 
functional specifications mentioned in your development documentation.
Testing Activities Included :
Test all the links in your webpages are working correctly and make sure there are 
no broken links. 
Links to be checked will include -
01. Outgoing links
02. Internal links
03. Anchor Links
04. MailTo Links
Types of Web App Testing
Test Forms are working as expected. This will include01. Scripting checks on the form are working as expected. For example- if a user 
does not fill a mandatory field in a form an error message is shown.
02. Check default values are being populated.
03. Once submitted, the data in the forms is submitted to a live database or is 
linked to a working email address.
04. Forms are optimally formatted for better readability.
Test business workflow- This will include
01. Testing your end - to - end workflow/ business scenarios which takes the user 
through a series of web pages to complete.
02. Test negative scenarios as well, such that when a user executes an unexpected 
step, appropriate error message or help is shown in your web application.
Functional Test Scenarios :
01. Test all the mandatory fields should be validated.
02. Test the asterisk sign should display for all the mandatory fields.
03. Test the system should not display the error message for optional fields.
04. Test that leap years are validated correctly & do not cause errors/miscalculaTest HTML and CSS to ensure that search engines can crawl your site easily. This 
will include
01. Checking for Syntax Errors
02. Readable Color Schemas
03. Standard Compliance. Ensure standards such W3C, OASIS, IETF, ISO, ECMA, or 
WS-I are followed.
Test Cookies are working as expected. Cookies are small files used by websites to 
primarily remember active user sessions so you do not need to log in every time 
you visit a website. Cookie Testing will include
01. Testing cookies (sessions) are deleted either when cache is cleared or when they 
reach their expiry.
02. Delete cookies (sessions) and test that login credentials are asked for when you 
next visit the site.
Usability Testing
What is Usability Testing ?
01. Usability testing is nothing but the User-friendliness check.
02. In Usability testing, the application flow is tested so that a new user can understand the application easily.
03. Basically, system navigation is checked in Usability testing.
Goal of Usability Testing :
A Usability test establishes the ease of use and effectiveness of a product using a 
standard Usability test practices.
tions.
05. Test the numeric fields should not accept the alphabets and proper error 
message should display.
06. Test for negative numbers if allowed for numeric fields.
07. Test division by zero should be handled properly for calculations.
08. Test the max length of every field to ensure the data is not truncated.
09. Test the pop up message (“This field is limited to 500 characters”) should display if the data reaches the maximum size of the field.
10. Test that a confirmation message should display for update and delete operations.
11. Test the amount values should display in currency format.
12. Test all input fields for special characters.
13. Test the timeout functionality.
14. Test the Sorting functionality. Test the Sorting functionality.
15. Test the functionality of the buttons available.
16. Test the Privacy Policy & FAQ is clearly defined and should be available for 
users.
17. Test if any functionality fails the user gets redirected to the custom error 
page.
Testing Activities Included :
Test the site Navigation:
01. Menus, buttons or Links to different pages on your site should be easily visible 
and consistent on all webpages.
02. Test the Content.
03. Content should be legible with no spelling or grammatical errors.
04. Images if present should contain an “alt” text.
Usability Test Scenarios :
01. Web page content should be correct without any spelling or grammatical errors.
02. All fonts should be same as per the requirements.
03. All the text should be properly aligned.
04. All the error messages should be correct without any spelling or grammatical 
errors and the error message should match with the field label.
05. Tool tip text should be there for every field.
06. All the fields should be properly aligned.
07. Enough space should be provided between field labels, columns, rows, and error 
messages.
08. All the buttons should be in a standard format and size.
09. Home link should be there on every single page.
10. Disabled fields should be grayed out.
11. Check for broken links and images.
12. Confirmation message should be displayed for any kind of update and delete operation.
13. Check the site on different resolutions (640 x 480, 600x800 etc.?)
14. Check the end user can run the system without frustration.
15. If there is an error message on submit, the information filled by the user should 
be there.
16. Title should display on each web page
17. All fields (Textbox, dropdown, radio button etc) and buttons should be accessible 
by keyboard shortcuts and the user should be able to perform all operations by 
using keyboard.
18. Check if the dropdown data is not truncated due to the field size and also check 
whether the data is hardcoded or managed via administrator.
Interface Testing
Three areas to be tested here are - Application, Web and Database Server
01. Application: Test requests are sent correctly to the Database and output at the 
client side is displayed correctly. Errors if any must be caught by the application 
and must be only shown to the administrator and not the end user.
02. Web Server: Test Web server is handling all application requests without any 
service denial.
03. Database Server: Make sure queries sent to the database give expected results.
Test system response when connection between the three layers (Application, 
Web and Database) cannot be established and appropriate message is shown to the 
end user.
Database Testing
Database is one critical component of your web application and stress must be laid 
to test it thoroughly. Testing activities will include01. Test if any errors are shown while executing queries.
02. Data Integrity is maintained while creating, updating or deleting data in database.
03. Check response time of queries and fine tune them if necessary.
04. Test data retrieved from your database is shown accurately in your web application.
To perform the Database testing, the tester should be aware of the below mentioned points:
01. The tester should understand the functional requirements, business logic, application flow and database design thoroughly.
02. The tester should figure out the tables, triggers, store procedures, views and 
cursors used for the application.
03. The tester should understand the logic of the triggers, store procedures, views 
and cursors created.
04. The tester should figure out the tables which get affected when insert update 
and delete (DML) operations are performed through the web or desktop applications.
Test Scenarios for Database Testing
01. Verify the database name: The database name should match with the specifications.
02. Verify the Tables, columns, column types and defaults. All things should match 
with the specifications.
03. Verify whether the column allows a null or not.
04. Verify the Primary and foreign key of each table.
05. Verify the Stored Procedure.
06. Test whether the Stored procedure is installed or not.
07. Verify the Stored procedure name
08. Verify the parameter names, types and number of parameters.
09. Test the parameters if they are required or not.
10. Test the stored procedure by deleting some parameters
11. Test when the output is zero, the zero records should be affected.
12. Test the stored procedure by writing simple SQL queries.
13. Test whether the stored procedure returns the values
14. Test the stored procedure with sample input data.
15. Verify the behavior of each flag in the table.
16. Verify the data gets properly saved into the database after the each page submision.
17. Verify the data if the DML (Update, delete and insert) operations are performed.
18. Check the length of every field. The field length in the back end and front end 
must be same.
19. Verify the database names of QA, UAT and production. The names should 
beunique.
20. Verify the encrypted data in the database.
21. Verify the database size. Also test the response time of each query executed.
22. Verify the data displayed on the front end and make sure it is same in the back 
end.
23. Verify the data validity by inserting the invalid data in the database.
24. Verify the Triggers.
Compatibility Testing
What is Compatibility Testing?
Compatibility testing is used to determine if your software is compatible with other 
elements of a system with which it should operate, e.g. Browsers, Operating Systems, or hardware.
Goal of Compatibility Testing :
The purpose of Compatibility testing is to evaluate how well software performs in 
a particular browser, Operating Systems, hardware or software. Compatibility tests 
ensure that your web application displays correctly across different devices.
Testing Activities Included :
Browser Compatibility Test: Same website in different browsers will display differently. You need to test if your web application is being displayed correctly across 
browsers, JavaScript, AJAX and authentication is working fine. You may also check 
for Mobile Browser Compatibility.
The rendering of web elements like buttons, text fields etc. changes with change 
in Operating System. Make sure your website works fine for various combination 
of Operating systems such as Windows, Linux, Mac and Browsers such as Firefox, 
Internet Explorer, Safari etc.
Compatibility Test Scenarios :
01. Test the website in different browsers (IE, Firefox, Chrome, Safari and Opera) 
and ensure the website is displaying properly.
02. Test the HTML version being used is compatible with appropriate browser 
versions.
03. Test the images display correctly in different browsers.
04. Test the fonts are usable in different browsers.
05. Test the java script code is usable in different browsers.
06. Test the Animated GIF's across different browsers.
Performance Testing
What is Performance Testing ?
Performance Testing is conducted to evaluate the compliance of a system or 
component with specified performance requirements.
Testing Activities Included :
01. Website application response times at different connection speeds.
02. Load test your web application to determine its behavior under normal and 
peak loads.
03. Stress test your web site to determine its break point when pushed to beyond normal loads at peak time.
04. Test if a crash occurs due to peak load, how does the site recover from such 
an event.
05. Make sure optimization techniques like gzip compression, browser and 
server side cache enabled to reduce load times.
General Test Scenarios :
01. To determine the performance, stability and scalability of an application 
under different load conditions.
02. To determine if the current architecture can support the application at 
peak user levels.
03. To determine which configuration sizing provides the best performance 
level.
04. To identify application and infrastructure bottlenecks.
05. To determine if the new version of the software adversely had an impact 
on response time.
06. To evaluate product and/or hardware to determine if it can handle projected load volumes.

Security Testing
Security Testing involves the test to identify any flaws and gaps from a security point of view.
Test Scenarios for Security Testing :
01. Verify the web page which contains important data like password, credit card numbers, secret answers for security question etc should be submitted via HTTPS (SSL).
02. Verify the important information like password, credit card numbers etc should 
display in encrypted format.
03. Verify password rules are implemented on all authentication pages like Registration, forgot password, change password.
04. Verify if the password is changed the user should not be able to login with the 
old password.
05. Verify the error messages should not display any important information.
06. Verify if the user is logged out from the system or user session was expired, the user should not be able to navigate the site.
07. Verify to access the secured and non secured web pages directly without login.
08. Verify the “View Source code” option is disabled and should not be visible to the user.
09. Verify the user account gets locked out if the user is entering the wrong password several times.
10. Verify the cookies should not store passwords.
11. Verify if, any functionality is not working, the system should not display any application, server, or database information. Instead, it should display the custom 
error page.
12. Verify the SQL injection attacks.
13. Verify the user roles and their rights. For Example The requestor should not be 
able to access the admin page.
14. Verify the important operations are written in log files, and that information should be traceable.
15. Verify the session values are in an encrypted format in the address bar.
16. Verify the cookie information is stored in encrypted format.
17. Verify the application for Brute Force Attacks.
