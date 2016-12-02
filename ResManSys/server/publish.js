/* global Recipes, Buildings, Requests, Rooms, Announcements */
//Shows recipes made by the author only
Meteor.publish('recipes', function(){
	return Recipes.find({author: this.userId});
});
Meteor.publish('buildings', function(){
	return Buildings.find({});
});

Meteor.publish('requests', function(){
	return Requests.find({});
});

Meteor.publish('rooms', function(){
	return Rooms.find({});
});

Meteor.publish('announcements', function(){
	return Announcements.find({});
});