/*global Requests, SimpleSchema, RequestSchema*/
Requests = new Mongo.Collection('requests');

Requests.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

RequestSchema = new SimpleSchema({
	type: {
		type: String,
    	allowedValues: [
        	"Service",
        	"Room Change",
        	"Complaint"
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
	room: {
		type: String,
		label: "Room"
	},
	completed: {
		type: Boolean,
		defaultValue: false,
		optional: true,		
		autoform: {
			type: "hidden"		
		}
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId;
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date();
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	deleteRequest: function(id) {
		Requests.remove(id);
	}	
});

Requests.attachSchema( RequestSchema );