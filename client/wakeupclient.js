'use strict';

  Template.main.events({
    'click .removeDate' : function (e) {
      var dateId = e.target.getAttribute('data-id');
      Meteor.call("removeDate",dateId);
    },
    'click input.book' : function (e) {
      var dateId = e.target.getAttribute('data-id')
      Meteor.call("bookDate",dateId,function(error,dateId){
      });
    },
    'click input.unbook' : function (e) {
      var dateId = e.target.getAttribute('data-id')
      Meteor.call("unbookDate",dateId,function(error,dateId){
      });
    },
    'click #admin_date input[type="button"]': function(e){
      var date =  document.getElementById('admin_date_input').value
      Meteor.call("addDate",date);
    }
  });



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