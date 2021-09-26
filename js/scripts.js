function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber, email, phoneAdd, homeAdd) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.email= email;
  this.phoneAdd= phoneAdd;
  this.homeAdd= homeAdd;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};


//Business Logic For PhoneNumber, EmailAddress & PhysicalAddress:-----
function PhoneNumber(mobile, home, work, other) {
  this.mobile = mobile;
  this.home = home;
  this.work = work;
  this.other = other;
}

function EmailAddress(mobile, home, work, other) {
  this.mobile = mobile;
  this.home = home;
  this.work = work;
  this.other = other;
}

function PhysicalAddress(home, work, other) {
  this.home = home;
  this.work = work;
  this.other = other;
}

// User Interface Logic ---------
let addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

function showContact(contactId) {
  const contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber );
  $(".email").html(contact.email);
  $(".phone-add").html(contact.phoneAdd);
  $(".home-add").html(contact.homeAdd);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<i   class='fas fa-trash delvic' id=" +  + contact.id + "></i>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });
  // Code below here is new!
  $("#buttons").on("click", ".delvic", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
}

$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    const inputtedEmail = $("input#new-email").val();
    const inputtedPhoneAddress = $("input#new-phone-address").val();
    const inputtedHomeAddresss = $("input#new-home-address").val();

    $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#new-phone-number").val("");
  $("input#new-email").val("");
  $("input#new-phone-address").val("");
  $("input#new-home-address").val("");

    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber,  inputtedEmail, inputtedPhoneAddress, inputtedHomeAddresss);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
  });
});