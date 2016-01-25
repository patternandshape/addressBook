describe ('Contact', function () {
  it("creates a new contact with the given properties", function() {
    var testContact = new Contact("Spencer","Doran");
    expect(testContact.firstName).to.equal("Spencer");
    expect(testContact.lastName).to.equal("Doran");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to a contact", function() {
    var testContact = new Contact("Sherlock", "Holmes");
    expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });
});
