'use strict';

if (Meteor.isClient) {
  Template.main.greeting = function () {
    return "James needs to wake up to code!";
  };

  Template.main.events({
    'click input.book' : function (e) {
      e.preventDefault();
      var el = e.target;
      var dateId = el.getAttribute('data-id')
      Meteor.call("bookDate",dateId,function(error,bookingId){
        console.log('added booking with id '+bookingId);
      });
    },
    'click input.unbook' : function (e) {
      e.preventDefault();
      var dateId = e.target.getAttribute('data-id')
      console.log(dateId);
      Meteor.call("unbookDate",dateId,function(error,dateId){
        console.log('unbooked booking with id '+dateId);
      });
    },
    'click #admin_date input[type="button"]': function(e){
      e.preventDefault();
      var date =  document.getElementById('admin_date_input').value
      Meteor.call("addDate",date);
    }
  });
}


Template.bookings.dates = function(){
  return Dates.find({},{sort:{'date':1}});
};

Template.bookings.booked = function(){
  return Dates.find({
      'user': Meteor.userId()
    }).count() != 0;
}


Template.main.isAdmin = isAdmin;

Handlebars.registerHelper("prettifyDate", function(date) {
  return moment(date).format('dddd Do MMM YYYY');
});
Handlebars.registerHelper("prettifyTimeAgo", function(date) {
  return moment(date).fromNow();
});