Template.business.helpers({
  profile: function() {
    return Profiles.find({
    "category":  "Business"})
  }
});
