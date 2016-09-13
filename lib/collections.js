Guests = new Mongo.Collection('guests');

GuestSchema = new SimpleSchema({
	name: {
		type: String
	},
	eMail: {
		type: String,
		optional: true
	},
	bReservationNumber: {
		type: Number,
		optional: true
	},
	phone: {
		type: String,
		optional: true
	},
	language: {
		type: String,
		optional: true
	},
	bGuestAmmount: {
		type: Number,
		min: 1,
		max: 4,
		optional: true
	},	
	address: {
		type: String,
		optional: true
	},
	bArrivalDate: {
		type: String,
		optional: true
	}, 
	bDepartureDate: {
		type: String,
		optional: true
	},
	bReservationDate: {
		type: String,
		optional: true
	},
	bTotalCost: {
		type: Number,
		optional: true
	},
	bCommissionableAmount: {
		type: Number,
		optional: true
	},
	bCommission: {
		type: Number,
		decimal: true,
		optional: true
	},
	createdAt: {
		type: Date,
		autoValue: function() {
			if ( this.isInsert ) {
				return new Date()
			}
		},
		denyUpdate: true,
	},
	modifiedAt: {
		type: Date,
		optional: true,
		autoValue: function() {
			if ( this.isUpdate ) {
				return new Date()
			}
		},
	},
	moneyPaid: {
		type: Number,
		optional: true
	},
	currency: {
		type: String,
		optional: true
	},
	realGuestAmmount: {
		type: Number,
		min: 1,
		max: 4,
		optional: true
	},
	commission: {
		type: Number,
		decimal: true,
		optional: true
	},
	comments: {
		type: String,
		optional: true
	}
});

Guests.attachSchema(GuestSchema);