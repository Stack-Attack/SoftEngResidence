// Copying Blake is fun, then modifying
// Modifying is very hard, rate me well

// This is for the update quick form to be able to call
// this method to get the unique id you want updated

Template.Room.onCreated(function(){
   this.editMode = new ReactiveVar(false);
});                                                                           //needs it's own variable to be in editmode, or else clicking edit on one would open up the editmode for all


Template.Room.helpers({
   updateRoomId: function() {                                             //This is just to make the update fields look nicer
      return this._id;
   },
   
   editMode: function() {
      return Template.instance().editMode.get();                              //Reactive vars are weird
   }
});

Template.Room.events({
   'click .fa-trash' : function() {
      Meteor.call('deleteRoom', this._id);
   },
   
   'click .fa-pencil' : function(event, template) {
      template.editMode.set(!template.editMode.get());                        //Reactive vars are weird
   }
});