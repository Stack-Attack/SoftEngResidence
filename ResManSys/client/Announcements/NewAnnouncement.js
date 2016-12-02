Template.NewAnnouncement.events({
   'click .fa-close' : function() {
       Session.set('newAnnouncement', false);           //Sets the 'newAnnouncement' session variable to false,
   }                                                //So when you click on the close button in the new building form
});     