Meteor.methods({
	addGuest: function(name, eMail, bRN, phone, language, bGA, address, bAD, bDD, bRD, bTC, bCA, bC){
		Guests.insert({
			name: name,
			eMail: eMail,
			bReservationNumber: bRN,
			phone: phone,
			language: language,
			bGuestAmmount: bGA,
			address: address,
			bArrivalDate: bAD,
			bDepartureDate: bDD,
			bReservationDate: bRD,
			bTotalCost: bTC,
			bCommissionableAmount: bCA,
			bCommission: bC
		})
	},
	addExtraInfo: function(guestId, mP, cu, rGA, co, com){
		console.log(guestId);
		Guests.update({
			_id: guestId
		},{
			$set:{
				moneyPaid: mP,
				currency: cu,
				realGuestAmmount: rGA,
				commission: co,
				comments: com				
			}

		})
	}
});