/*global Requests, SimpleSchema, RequestSchema*/
Requests = new Mongo.Collection('requests');

Requests.allow({
	insert: function(userId, doc) {
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

	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
	}
});

Requests.attachSchema( RequestSchema );