/*global Requests*/
Meteor.subscribe("requests");

Template.Requests.helpers({
   requests: ()=> {
      return Requests.find({},{sort:{createdAt: -1}});
   } 
});

Template.UserViewRequests.helpers({
   requests: ()=> {
      return Requests.find({}, {sort:{number: 0}});
   } 
});

Template.UserViewRequests.helpers({ 
  thisAuthor: function (currentUser, author) {
     console.log(this.users.id);
     console.log(currentUser);
     console.log(author);
     if (Meteor.user() === author)
         return true;
      else
         return false;
  }
});


Template.Request.events({
   
   'click .toggleComplete' : function() {
      Requests.update({_id: this._id}, {$set: { 'completed': !this.completed }});
   }
});