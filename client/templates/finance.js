Template.finance.helpers({
  profile: function() {
    return Profiles.find({
    "category":  "Finance"})
  }
});
