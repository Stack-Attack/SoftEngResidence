Template.Request.events({
   'click .fa-trash' : function() {
      Meteor.call('deleteRequest', this._id);
   }
});