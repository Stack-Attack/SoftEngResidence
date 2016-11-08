/*global Notices, SimpleSchema, NoticeSchema*/
Notices = new Mongo.Collection('notices');

Notices.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});


NoticeSchema = new SimpleSchema({
	type: {
		type: String,
    	allowedValues: [
        	"Maintainance",
        	"Hazard",
        	"General"
    	],
    	label: "Choose a request type:"
	},
	
	desc: {
		type: String,
		label: "Description",
    	autoform: {
        	 rows: 5
    	}
	},

	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
	}
});

Notices.attachSchema( NoticeSchema );