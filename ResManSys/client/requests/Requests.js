Meteor.subscribe("requests");

Template.Requests.helpers({
   requests: ()=> {
      return Requests.find({});
   } 
});