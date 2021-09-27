### Author: Opebiyi Victor Praise.

# ADDRESS-BOOK.

## TECHNOLOGIES:
* Git (command line).
* CSS (cascading style sheets (bootstrap.css & styles.css)).
* JS  (JavaScript (jquery-3.6.0.js & scripts.js)).
* HTML (Hypertext markup language).


## Description OF Program.

This program is **a book or a database used for storing entries called contacts**. Each contact entry usually consists of a few standard fields (for example: first name, last name, company name, address, telephone number, e-mail address, mobile phone number). It allows users to store details of their personal contacts.

## PROGRAM SETUP INSTRUCTIONS && TEST DRIVEN DEVELOPMENTS {TDD}.

### SETUP:

- Use index.html for home page.
- Used css to style pages (custom styles.css as well as bootstrap).
- Sent valid commits regularly through Github.
- I used javascript to make the page interactive (custom javascript and Jquery)
- And i finally used VS code edittor to add a READme.

### TEST DRIVEN DEVELOPMENTS {TDD}:

-----> Describe: Contact()

* Test: It is a constructive function for contact objects, it takes the contact details and stores them as an object.

* Code: let newContact = new Contact("Victor", "Praise", "Opebiyi");  console.log(newContact);

* Expected Output: Contact {firstName: "Victor", middleName: "Praise", lastName: "Opebiyi"}

-----> Describe Contact.prototype.fullName()

* Test: It is a prototypal function under the Contact Constructor which takes the contacts first name and last name, then concatenates them with a space in-between.

* Code: newContact.fullName();

* Expected Output: "Victor Opebiyi"

-----> Describe: PhoneNumber()

* Test: It is a constructive function for phone numbers objects, it takes the number type (mobile, home, work, others) and stores them as an object.

* Code: let newNumber = new PhoneNumber(09138673674, 081031837, 09138673674, 09079850985); console.log(newNumber);

* Expected Output: PhoneNumber {mobile: 09138673674, home: 09029936119, work: 09138673674, other: 09079850985}


-----> Describe Contact.prototype.addNumber()

* Test: This prototypal function assigns a new property to the Contact function with a key phoneNumber and the value as the PhoneNumber object.

* Code: newContact.addNumber(newNumber);

* Expected Output: True

-----> Describe: EmailAddress()

* Test: It is a constructive function for Email objects, it takes the Email type (mobile, home, work, others) and stores them as an object.

* Code: let newEmail = new EmailAddress(victechpoint@gmail.com, praiseopebiyivictor@Gmail.com, victech@yahoo.com, adalovelace@yahoo.com); console.log(newEmail);

* Expected Output: EmailAddress {mobile: victechpoint@gmail.com,  home: praiseopebiyivictor@Gmail.com, work: victech@yahoo.com, other: adalovelace@yahoo}

-----> Describe Contact.prototype.addEmail()

* Test: This prototypal function assigns a new property to the Contact function with a key email and the value as the EmailAddress object.

* Code: newContact.addEmail(newEmail);

* Expected Output: True

-----> Describe: PhysicalAddress()

* Test: It is a constructive function for PhysicalAddress objects, it takes the PhysicalAddress type (home, work, others) and stores them as an object.

* Code: let newAddress = new PhysicalAddress(24 primate ayodele crescent, Bill gates road, Washington Dc off miller's road); console.log(newAddress);

* Expected Output: PhysicalAddress {home: 24 primate ayodele crescent, work: Bill gates road, other: Washington Dc off miller's road}

-----> Describe Contact.prototype.addAddress()

* Test: This prototypal function assigns a new property to the Contact function with a key address and the value as the PhysicalAddress object.

* Code: newContact.addAddress(newAddress);

* Expected Output: True

-----> Describe: AddressBook()

* Description Test: This is a constructive function which stores all Contact in an object, in this case it was used to mock a database it behaves similarly as a database would. It has just two parameters in it({contacts = {}; currentId = 0;}).  It has prototypal functions assigned to it(addContact, assignId, findContact, deleteContact) which would be used to add a contact, assign id to a contact, find a contact, and delete a contact respectively.

## COPYRIGHT AND LICENSE INFORMATION.

Subject to the terms and conditions of this agreement, _i hereby grant_ in exchange for goods and valuable consideration, the receipt and sufficiency of which is hereby acknowledged, to any personnel who has completed the fundamentals of coding worldwide, and the trade secret license to reproduce, adapt, translate, modify, and prepare derivative works of publicly display.



