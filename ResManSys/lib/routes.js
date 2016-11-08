/*global FlowRouter,GAnalytics,BlazeLayout*/

Accounts.onLogin(function() {
	var id = Meteor.userId()
	var currentUser = Meteor.users.findOne({_id: id})
	//console.log(currentUser.isAdmin);
	var admin = currentUser.isAdmin
	console.log("Account logged in: " + id)						//This shows who is logged in (should remove it some time)
	console.log("Account is admin: " + currentUser.isAdmin)
	
	if(Meteor.userId() == "vextaGBW37KiisW8G"){									//if you log in as an admin you will be redirected to admin page
		FlowRouter.go('admin-page')
	}else{																		//if you log in as a user you will be redirected to the user page
		FlowRouter.go('user-page')
	}	
});

Accounts.onLogout(function() {													//Redirected to homepage on logout
	FlowRouter.go('home');											
});

FlowRouter.triggers.enter([function(context, redirect){							//Another trigger for not being in a place you don't belong(kyle on earth for example)
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()){
			if(Meteor.userId() == "vextaGBW37KiisW8G"){							//if you are already logged in as admin, you will automatically go to the admin page
				FlowRouter.go('admin-page')									
			} else {															//if you are already logged in as a user you will automatically go to the user page
				FlowRouter.go('user-page')
			}																	//if not logged in, you will stay at the home page until you log in to an account
		}
		
		BlazeLayout.render('HomeLayout');
	}
});



FlowRouter.route('/user-page', {
	name: 'user-page',
	action() {
		
		BlazeLayout.render('UserLayout', {main: 'Recipes'})
	}
});

FlowRouter.route('/admin-page', {
	name: 'admin-page',
	action() {
		if(Meteor.userId()){
			if(Meteor.userId() == "vextaGBW37KiisW8G"){							//if you are already logged in as admin, you will automatically go to the admin page
				FlowRouter.go('admin-page')									
			} else {															//if you are already logged in as a user you will automatically go to the user page
				FlowRouter.go('user-page')
			}																	//if not logged in, you will stay at the home page until you log in to an account
		} else {
			FlowRouter.go('/')
		}
		
		BlazeLayout.render('AdminLayout', {main: 'Requests'})
	}
});

FlowRouter.route('/make-request-page', {
	name: 'make-request-page',
	action() {
		
		BlazeLayout.render('UserLayout', {main: 'NewRequest'});
	}
});

/*FlowRouter.route('/make-notice-page', {
	name: 'make-notice-page',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('AdminLayout', {main: 'NewNotice'});
	}
});*/

FlowRouter.route('/view-buildings-page', {
	name: 'view-buildings-page',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('UserLayout', {main: 'Buildings'});
	}
});

FlowRouter.route('/manage-buildings-page', {
	name: 'manage-buildings-page',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('AdminLayout', {main: 'Buildings'});
	}
});

FlowRouter.route('/building-edit/:id', {
	name: 'manage-buildings-page',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('AdminLayout', {main: 'BuildingEdit'});
	}
});
FlowRouter.route('/building-rooms/:id', {
	name: 'manage-buildings-page',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('AdminLayout', {main: 'BuildingRooms'});
	}
});