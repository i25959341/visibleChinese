
if (Meteor.isClient) {
    $(function() {
      $(document).ready(function() {
        $(window).scroll(function() {
          console.log($(window).scrollTop())
          if ($(window).scrollTop() > 1000) {
            $('.navbar').addClass('navbar-fixed-top');
            $('.dummy-div').remove();
          }
          if ($(window).scrollTop() < 1001) {
            $('.navbar').removeClass('navbar-fixed-top');
          }
        });
        });
    });
}
