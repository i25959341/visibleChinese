Template.sport.helpers({
  profile: function() {
    return Profiles.find({
    "category":  "Sports"})
  }
});
