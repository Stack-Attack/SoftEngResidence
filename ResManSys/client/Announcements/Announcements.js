Meteor.subscribe("announcements");

Template.Announcements.helpers({
   announcements: ()=> {
      return Announcements.find({},{sort:{createdAt: -1}});
   } 
});

Template.userAnnouncementsView.helpers({
   announcements: ()=> {
      return Announcements.find({},{sort:{createdAt: -1}});
   } 
});

Template.Announcements.events({
   'click .btn-new-announcement': () => {
      Session.set('newAnnouncement', true);
   }
});