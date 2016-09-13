Template.guestDetails.onCreated(function(){
	this.subscribe('guests');
});

Template.guestDetails.helpers({
	guest: ()=> {
		let id = FlowRouter.getParam('id');
		return Guests.findOne({_id: id});
	},
	touristTax: function(tC, cA){
		let totalCost = tC;
		let commissionableAmount = cA;
		return tC-cA;
	}
});

Template.guestDetails.events({
	'submit .extraInfo': function(event) {
		const moneyPaid = event.target.moneyPaid.value;
		const currency = event.target.currency.value;
		const realGuestAmmount = event.target.realGuestAmmount.value;
		const commission = event.target.commission.value;
		const comments = event.target.comments.value;
		const guestId = FlowRouter.getParam('id');

		console.log(guestId);

		Meteor.call('addExtraInfo', guestId, moneyPaid, currency, realGuestAmmount, commission, comments, function(error, res){
			if(!error){
				FlashMessages.sendSuccess('Informacje zostały zapisane');
				//FlowRouter.go('/desktop');
			} else {
				FlashMessages.sendError('Podczas operacji wystąpił błąd');
				console.log(err);
			}
		});

		//Clear form
		event.target.moneyPaid.value = '';
		event.target.currency.value = '';
		event.target.realGuestAmmount.value = '';
		event.target.commission.value = '';
		event.target.comments.value = '';

		return false;
	}
});