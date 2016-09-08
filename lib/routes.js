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