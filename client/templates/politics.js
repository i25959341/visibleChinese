Template.politics.helpers({
  profile: function() {
    return Profiles.find({
    "category":  "Politics"})
  }
});
