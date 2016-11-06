//Shows recipes made by the author only
Meteor.publish('recipes', function(){
	return Recipes.find({author: this.userId});
});