Template.tech.helpers({
  profile: function() {
    return Profiles.find({
    "category":  "Tech"})
  }
});
