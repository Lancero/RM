Meteor.publish('guests', function(){
	return Guests.find({});
});