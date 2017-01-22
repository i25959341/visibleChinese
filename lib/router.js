Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'list'});

Router.route('/jackson', {
  layoutTemplate: '',
  name: 'personDescription'
});
