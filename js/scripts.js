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
  confirm("Are You Sure");
};

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

Contact.prototype.addNumber = function (phoneNumber) {
  this.phoneNumber = phoneNumber;
  return true;
}

Contact.prototype.addEmail = function (emailAddress) {
  this.email = emailAddress;
  return true;
}

Contact.prototype.addAddress = function (physicalAddress) {
  this.address = physicalAddress;
}


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
  $(".phonemobile").html(contact.phoneNumber.mobile);
  $(".phonehome").html(contact.phoneNumber.home);
  $(".phonework").html(contact.phoneNumber.work);
  $(".phoneothers").html(contact.phoneNumber.other);
  $(".emailmobile").html(contact.email.mobile);
  $(".emailhome").html(contact.email.home);
  $(".emailwork").html(contact.email.work);
  $(".emailothers").html(contact.email.other);
  $(".homeaddress").html(contact.address.home);
  $(".workaddress").html(contact.address.work);
  $(".otheraddress").html(contact.address.other);

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
    let newContact = new Contact(inputtedFirstName, inputtedLastName);

    const inputtedMobileNumber = $("input#new-mobile-number").val();
    const inputtedHomeNumber = $("input#new-home-number").val();
    const inputtedWorkNumber = $("input#new-work-number").val();
    const inputtedOtherNumber = $("input#new-other-number").val();

    let newPhoneNumber = new PhoneNumber(inputtedMobileNumber, inputtedHomeNumber, inputtedWorkNumber, inputtedOtherNumber);

    const inputtedMobileEmail = $("input#new-mobile-email").val();
    const inputtedHomeEmail = $("input#new-home-email").val();
    const inputtedWorkEmail = $("input#new-work-email").val();
    const inputtedOtherEmail = $("input#new-other-email").val();

    let newEmail = new EmailAddress(inputtedMobileEmail, inputtedHomeEmail, inputtedWorkEmail, inputtedOtherEmail);

    const inputtedHomeAddress = $("input#new-home-address").val();
    const inputtedWorkAddress = $("input#new-work-address").val();
    const inputtedOtherAddress = $("input#new-other-address").val();

    let newPhysicalAddress = new PhysicalAddress(inputtedHomeAddress, inputtedWorkAddress, inputtedOtherAddress);


    $("input#new-first-name").val("");
    $("input#new-middle-name").val("");
    $("input#new-last-name").val("");
    $("input#new-mobile-number").val("");
    $("input#new-home-number").val("");
    $("input#new-work-number").val("");
    $("input#new-other-number").val("");
    $("input#new-mobile-email").val("");
    $("input#new-home-email").val("");
    $("input#new-work-email").val("");
    $("input#new-other-email").val("");
    $("input#new-home-address").val("");
    $("input#new-work-address").val("");
    $("input#new-other-address").val("");

    newContact.addNumber(newPhoneNumber);
    newContact.addEmail(newEmail);
    newContact.addAddress(newPhysicalAddress);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);

    $(".hidden1").hide();
    $(".hidden2").hide();
    $(".hidden3").hide();
  });

  $("#same1").click(function () {
    $(".hidden1").toggle();
  })

  $("#same2").click(function () {
    $(".hidden2").toggle();
  })

  $("#same3").click(function () {
    $(".hidden3").toggle();
  })

  $("#done").click(function(){
    $("#show-contact").hide();
  })

  });
