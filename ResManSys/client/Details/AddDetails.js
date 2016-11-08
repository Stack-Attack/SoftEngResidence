/*global details, global page*/
// This form is for adding more details to the user
// Redirects to 

/*Template.add-details-page.events({
  "submit #add-details-form": function(event, template) {
      
    event.preventDefault();
    
    fullname: template.find("#signup-fullname").value,
    phone: template.find("#signup-phone").value,
   
    var user = Meteor.users.findOne(this.userId);
    
    user.fullname = fullname;
    user.phone = phone;
    
    // Assuming user, since one admin account
    FlowRouter.go('/user-page');
  }
});
*/