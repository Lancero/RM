Guests = new Mongo.Collection('guests');

/*GuestSchema = new SimpleSchema({
	name:{
		type: String,
	},
	e_mail:{
		type: String,
		optional: true
	},
	b_reservation_number:{
		type: Number,
		optional: true
	},   
	createdAt: {
		type: Date,
		label: "Created At",
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

	}	
});*/