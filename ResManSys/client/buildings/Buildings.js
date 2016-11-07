Meteor.subscribe("buildings");

Template.Buildings.helpers({
   buildings: ()=> {
      return Buildings.find({});
   } 
});