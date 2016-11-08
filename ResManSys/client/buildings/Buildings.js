Meteor.subscribe("buildings");

Template.Buildings.helpers({
   buildings: ()=> {
      return Buildings.find({},{sort:{name}});
   } 
});

Template.Buildings.events({
   'click .btn-new-building': () => {
      Session.set('newBuilding', true);
   }
});