if (Meteor.isClient) {
	Accounts.onLogin(function(){
		FlowRouter.go('desktop');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});	
}

FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('homeLayout');
	}
});
FlowRouter.route('/desktop', {
	name: 'desktop',
	action() {
		BlazeLayout.render('mainLayout', {main: 'desktop'});
	}
});
FlowRouter.route('/newGuest', {
	name: 'newGuest',
	action() {
		BlazeLayout.render('mainLayout', {main: 'newGuest'});
	}
});
FlowRouter.route('/guestsList', {
	name: 'guestsList',
	action() {
		BlazeLayout.render('mainLayout', {main: 'guestsList'});
	}
});