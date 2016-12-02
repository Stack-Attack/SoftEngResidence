Template.Announcement.events({
   'click .fa-trash' : function() {
      Meteor.call('deleteAnnouncement', this._id)                                 //This is calling the 'deleteBuilding' method in ../collections/Buildings.js to remove the desired building from the mongo collection
   }
});