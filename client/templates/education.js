Template.education.helpers({
  profile: function() {
    return Profiles.find({
    "category":  "Education"})
  }
});
