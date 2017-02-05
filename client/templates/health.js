Template.health.helpers({
  profile: function() {
    return Profiles.find({
    "category":  "Health"})
  }
});
