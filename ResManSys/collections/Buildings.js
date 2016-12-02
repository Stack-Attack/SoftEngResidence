/*global Buildings, SimpleSchema, BuildingSchema, Facility*/
Buildings = new Mongo.Collection('buildings');

Buildings.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return!!userId;
	}
});


Facility = new SimpleSchema({
	name: {
		type: String,
	}
});

BuildingSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	
	address: {
		type: String,
		label: "Address"
	},
	
	facilities: {
		optional: true,
		type: [Facility],
		label: "Facilities"
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
			if(null)
				return new Date();
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	deleteBuilding: function(id) {
		Buildings.remove(id);
	}	
});

Buildings.attachSchema( BuildingSchema );