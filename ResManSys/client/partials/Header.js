Template.Header.events({
   'click .login-toggle': ()=> {
       Session.set('nav-toggle', 'open');
   },
   'click .logout': ()=> {
       console.log("Clicked logout");
       Session.set('nav-toggle', '');
       Meteor.logout();
   }
});