/*global FlowRouter,GAnalytics,BlazeLayout*/

FlowRouter.route('/', {
	name: 'home',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/user-page', {
	name: 'user-page',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('UserLayout', {main: 'Recipes'});
	}
});

FlowRouter.route('/admin-page', {
	name: 'admin-page',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('AdminLayout', {main: 'Recipes'});
	}
});

FlowRouter.route('/make-request-page', {
	name: 'make-request-page',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('UserLayout', {main: 'Requests'});
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

