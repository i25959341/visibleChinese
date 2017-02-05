Template.law.helpers({
  profile: function() {
    return Profiles.find({
    "category":  "Law"})
  }
});
