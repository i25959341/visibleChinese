Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('profiles'); }
});

Router.route('/', {name: 'list'});
Router.route('/art', {name: 'art'});
Router.route('/business', {name: 'business'});
Router.route('/media', {name: 'media'});
Router.route('/sport', {name: 'sport'});
Router.route('/health', {name: 'health'});
Router.route('/finance', {name: 'finance'});
Router.route('/tech', {name: 'tech'});
Router.route('/education', {name: 'education'});
Router.route('/politics', {name: 'politics'});
Router.route('/law', {name: 'law'});

Router.route('/posts/:_id', {
  layoutTemplate: '',
  name: 'personDescription',
  data: function() {
    return Profiles.findOne(this.params._id);
  }
});

Router.route('/test', {
  layoutTemplate: '',
  name: 'test'
});
