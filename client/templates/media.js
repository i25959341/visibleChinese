Template.media.helpers({
  profile: function() {
    return Profiles.find({
    "category":  "Media"})
  }
});
