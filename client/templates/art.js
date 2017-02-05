Template.art.helpers({
  profile: function() {
    return Profiles.find({
    "category":  "Art"})
  }
});
