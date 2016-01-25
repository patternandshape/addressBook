function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(street, city, state, zip) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    var pStreet = $("input#street").val();
    var pCity = $("input#city").val();
    var pState = $("input#state").val();
    var pZip = $("input#zip").val();
    var newAddress = new Address(pStreet, pCity, pState, pZip);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

  $(".contact").last().click(function() {
  $("#show-contact").show();
  $("#show-contact h2").text(newContact.fullName());
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
  $(".street").text(newAddress.street);
  $(".city").text(newAddress.city);
  $(".state").text(newAddress.state);
  $(".zip").text(newAddress.zip);
});
});
});
