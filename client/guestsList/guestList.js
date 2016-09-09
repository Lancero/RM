Template.guestsList.onCreated(function(){
	this.subscribe('guests');
});

Template.guestsList.helpers({
	guests: function(){
		return Guests.find();
	}
})