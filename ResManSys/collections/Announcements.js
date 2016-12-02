/*global Announcements, SimpleSchema, AnnouncementSchema*/
Announcements = new Mongo.Collection('announcements');

Announcements.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return!!userId;
	}
});

AnnouncementSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	
	desc: {
		type: String,
		label: "Description"
	},
	
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	deleteAnnouncement: function(id) {
		Announcements.remove(id);
	}	
});

Announcements.attachSchema( AnnouncementSchema );