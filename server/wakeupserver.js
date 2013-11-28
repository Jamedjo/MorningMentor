Bookings = new Meteor.Collection("bookings");

Meteor.startup(function () {
  // code to run on server at startup
});

Meteor.methods({
  addBooking: function(date){
    var bookingId = Bookings.insert({
      'date': date,
      'createdAt': new Date(),
      'user': Meteor.userId()
    });
    return bookingId;
  }
});
