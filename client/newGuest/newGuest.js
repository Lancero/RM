Template.newGuest.onCreated(function(){
	this.subscribe('guests');
});

Template.newGuest.onRendered(function(){
	//Format set
	this.$('.datetimepicker').datetimepicker({
		format: "D-MM-YYYY"
	});

    $('#datetimepicker2').datetimepicker({
        useCurrent: false
    });
    $('#datetimepicker3').datetimepicker({
        useCurrent: false
    });
    // Min Date set for arrival date
    $("#datetimepicker1").on("dp.change", function (e) {
        $('#datetimepicker2').data("DateTimePicker").minDate(e.date);      
    });
    // Max Date set for reservation date
    $("#datetimepicker1").on("dp.change", function (f) {
        $('#datetimepicker3').data("DateTimePicker").maxDate(f.date);
    });
    // Max Date set for departure date
    $("#datetimepicker2").on("dp.change", function (e) {
        $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
    });
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
		const bookingArrivalDate = event.target.bookingArrivalDate.value;
		const bookingDepartureDate = event.target.bookingDepartureDate.value;
		const bookingReservationDate = event.target.bookingReservationDate.value;
		const bookingTotalCost = event.target.bookingTotalCost.value;
		const bookingCommissionableAmount = event.target.bookingCommissionableAmount.value;
		const bookingCommission = event.target.bookingCommission.value;

		Meteor.call('addGuest', name, eMail, bookingReservationNumber, phone, language, bookingGuestAmmount, address, bookingArrivalDate, bookingDepartureDate, bookingReservationDate, bookingTotalCost, bookingCommissionableAmount, bookingCommission, function(error, res){
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
		event.target.bookingArrivalDate.value = '';
		event.target.bookingDepartureDate.value = '';
		event.target.bookingReservationDate.value = '';
		event.target.bookingTotalCost.value = '';
		event.target.bookingCommissionableAmount.value = '';
		event.target.bookingCommission.value = '';
		

		return false
	}
})