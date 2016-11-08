// This is for the update quick form to be able to call
// this method to get the unique id you want updated
Template.Building.onCreated(function(){
   this.editMode = new ReactiveVar(false);                                    //Reactive vars are used instead of session variables because each building template
});                                                                           //needs it's own variable to be in editmode, or else clicking edit on one would open up the editmode for all


Template.Building.helpers({
   updateBuildingId: function() {                                             //This is just to make the update fields look nicer
      return this._id;
   },
   
   editMode: function() {
      return Template.instance().editMode.get();                              //Reactive vars are weird
   }
});

Template.Building.events({
   'click .fa-trash' : function() {
      Meteor.call('deleteBuilding', this._id)                                 //This is calling the 'deleteBuilding' method in ../collections/Buildings.js to remove the desired building from the mongo collection
   },
   
   'click .fa-pencil' : function(event, template) {
      template.editMode.set(!template.editMode.get());                        //Reactive vars are weird
   }
});