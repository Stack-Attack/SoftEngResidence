/*global FlowRouter, Buildings*/
Meteor.subscribe("buildings");

Template.BuildingEdit.helpers({
   building: ()=> {                             
      var id = FlowRouter.getParam('id');       //Get's the id of the building you clicked on
      return Buildings.findOne({_id: id});      //Finds the id of the building in the db
   } 
});