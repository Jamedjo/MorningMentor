'use strict';

if (Meteor.isClient) {
  Template.main.greeting = function () {
    return "James needs to wake up to code!";
  };

  Template.main.events({
    'click input.book' : function (e) {
      // template data, if any, is available in 'this'
      e.preventDefault();
      var el = e.target;
      var date = el.getAttribute('data-date')
      Meteor.call("addBooking",date,function(eror,bookingId){
        console.log('added booking with id '+bookingId);
      });
      if (typeof console !== 'undefined'){
        console.log(date);
      }
    }
  });
}

var Bookings = new Meteor.Collection("bookings");

Template.bookings.bookings = function(){
  return Bookings.find({},{sort:{'createdAt':-1}});
};


Template.main.isAdmin = isAdmin;