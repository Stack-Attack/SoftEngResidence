/*global Rooms, SimpleSchema, RoomSchema, Device, FlowRouter, Occupants*/
Rooms = new Mongo.Collection('rooms');

Rooms.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return!!userId;
	}
});



Occupants = new SimpleSchema({
	name: {
		type: String
	},
	studentNumber: {
		type: String
	}
});

Device = new SimpleSchema({
	name: {
		type: String
	}
});


RoomSchema = new SimpleSchema({
	number: {
		type: String
	},
	
	typeOfRoom: {
		// Integer for certain types of rooms
		type: String,
		allowedValues: [
        	"Single",
        	"Basic single",
        	"Double"
    	],
    	label: "Choose a room type:"
	},
	
	devices: {
		optional: true,
		type: [Device],
		label: "Devices"
	},
	
	available: {
		type: Boolean,
		defaultValue: true,
		optional: false,		
		autoform: {
			type: "hidden"		
		}
	},
	
	capacity: {
        type: String
	},

    occupants: {
    	optional: true,
		type: [Occupants],
		label: "Occupants"
	},

	// Get url id to compare to
	building_id: {
		type: String,
		label: "Building ID",
		autoform: {
			value: function() {
				return FlowRouter.getParam('id');
			},
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
	deleteRoom: function(id) {
		Rooms.remove(id);
	}	
});

Rooms.attachSchema( RoomSchema );