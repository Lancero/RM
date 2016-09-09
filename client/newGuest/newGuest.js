Template.newGuest.onCreated(function(){
	this.subscribe('guests');
});

Template.newGuest.events({
	'submit .addNewGuest': function(event){
		const name = event.target.name.value;
		const eMail = event.target.eMail.value;
		const bookingReservationNumber = event.target.bookingReservationNumber.value;
		const phone = event.target.phone.value;
		const language = event.target.language.value;
		const bookingGuestAmmount = event.target.bookingGuestAmmount.value;
		const address = event.target.address.value;
		const bookingArrivalDdate = event.target.bookingArrivalDdate.value;
		const bookingDepartureDate = event.target.bookingDepartureDate.value;
		const bookingReservationDate = event.target.bookingReservationDate.value;
		const bookingTotalCost = event.target.bookingTotalCost.value;
		const bookingCommissionableAmount = event.target.bookingCommissionableAmount.value;
		const bookingCommission = event.target.bookingCommission.value;

		Meteor.call('addGuest', name, eMail, bookingReservationNumber, phone, language, bookingGuestAmmount, address, bookingArrivalDdate, bookingDepartureDate, bookingReservationDate, bookingTotalCost, bookingCommissionableAmount, bookingCommission, function(error, res){
			if(!error){
				FlashMessages.sendSuccess('Zadanie zostało zaaktualiowane');
				//FlowRouter.go('/desktop');
			} else {
				FlashMessages.sendError('Podczas operacji wystąpił błąd');
				console.log(err);
			}
		});

		//Clear form
		event.target.name.value = '';
		event.target.eMail.value = '';
		event.target.bookingReservationNumber.value = '';
		event.target.phone.value = '';
		event.target.language.value = '';
		event.target.bookingGuestAmmount.value = '';
		event.target.address.value = '';
		event.target.bookingArrivalDdate.value = '';
		event.target.bookingDepartureDate.value = '';
		event.target.bookingReservationDate.value = '';
		event.target.bookingTotalCost.value = '';
		event.target.bookingCommissionableAmount.value = '';
		event.target.bookingCommission.value = '';
		

		return false
	}
})