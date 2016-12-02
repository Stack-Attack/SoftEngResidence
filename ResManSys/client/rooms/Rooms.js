/* global Rooms, FlowRouter*/

// The first part is for listing building sorted by name. This obtains the values from the collection(database).
// The second part for creating a room when the form is sumbitted.
// Papa bless, Blake
Meteor.subscribe("rooms");

Template.Rooms.helpers({
   rooms: ()=> {
      return Rooms.find({}, {sort:{number: 0}});
   } 
});

// For later to create a view for user
Template.userBuildingRoomsView.helpers({
   rooms: ()=> {
   // Only show avalible rooms
      return Rooms.find({}, {sort:{number: 0}});
   } 
});


Template.userBuildingRoomsView.helpers({ 
  inUserBuilding: function (building_id, available) {
     var id = FlowRouter.getParam('id');
     if (building_id === id && available)
         return true;
      else
         return false;
  }
});

Template.UserBuildingRoom.helpers({ 
  numberOfOccupants: function (occupants) {
     return occupants.length;
  }
});

Template.Room.events({ 
   'click .toggleAvailible': function() {
      Rooms.update({_id: this._id}, {$set: { 'available': !this.available }});
   }
});

Template.Rooms.helpers({ 
  inBuilding: function (building_id) {
     var id = FlowRouter.getParam('id');
     if (building_id === id)
         return true;
      else
         return false;
  }
});

Template.Rooms.events({
   'click .btn-new-room': () => {
      Session.set('newRoom', true);
     
   }
});