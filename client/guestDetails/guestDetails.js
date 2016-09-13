Template.guestDetails.onCreated(function(){
	this.subscribe('guests');
});

Template.guestDetails.helpers({
	guest: ()=> {
		let id = FlowRouter.getParam('id');
		console.log(this);
		return Guests.findOne({_id: id});
	}
});

Template.guestDetails.events({
	'click .btn': function() {
		console.log(this);
		return false;
	}
})