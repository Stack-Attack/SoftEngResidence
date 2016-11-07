//Shows recipes made by the author only
Meteor.publish('recipes', function(){
	return Recipes.find({author: this.userId});
});
Meteor.publish('buildings', function(){
	return Buildings.find({author: this.userId});
});