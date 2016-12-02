// The first part is for listing building sorted by name. This obtains the values from the collection(database).
// The second part for creating a building when the form is sumbitted.
/* global Buildings */
Meteor.subscribe("buildings");

Template.Buildings.helpers({
   buildings: ()=> {
      return Buildings.find({},{sort:{name}});
   } 
});

Template.userBuildingsView.helpers({
   buildings: ()=> {
      return Buildings.find({},{sort:{name}});
   } 
});

Template.Buildings.events({
   'click .btn-new-building': () => {
      Session.set('newBuilding', true);
   }
});

Template.Buildings.events({
   'click .btn-new-building' : function() {
   }
});
 
