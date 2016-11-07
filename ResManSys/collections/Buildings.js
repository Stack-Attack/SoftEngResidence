/*global Buildings, Room, SimpleSchema, BuildingSchema*/
Buildings = new Mongo.Collection('buildings');

Buildings.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

/*
Device = new SimpleSchema({
	name: {
		type: String
	},
	desc: {
		type:String
	}
});

Room = new SimpleSchema({
	number: {
		type: int
	},
	typeOfRoom: {
		// Integer for certain types of rooms
		type: int
	},
	avalible: {
		type: boolean,
		autoValue: function(){
			return 1		
		},
		autoform: {
			type: "hidden"		
		}
	},
	devices: {
		type: [Device]
	}
});
*/

BuildingSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	
	address: {
		type: String,
		label: "Address"
	},
	
/*	rooms: {
		type: [Room]
		autoValue: function() {
		    return the rooms that have been assigned to this building
		}
	},
*/
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

Buildings.attachSchema( BuildingSchema );