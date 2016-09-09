Meteor.methods({
	addGuest: function(name, eMail, bRN, phone, language, bGA, address, bAD, bDD, bRD, bTC, bCA, bC){
		Guests.insert({
			name: name,
			e_mail: eMail,
			bRN: bRN,
			phone: phone,
			language: language,
			bGA: bGA,
			address: address,
			bAD: bAD,
			bDD: bDD,
			bRD: bRD,
			bTC: bTC,
			bCA: bCA,
			bC: bC
		})
	}
});