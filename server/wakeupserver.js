Dates = new Meteor.Collection("dates");

Meteor.startup(function () {
  if(Dates.find().count()==0){
    _.each(bookable_dates,function(dateString){
      Meteor.call('addDate',dateString);
    });
  }
});

Meteor.methods({
  addDate: function(dateString){
    var dateId = Dates.insert({
      'date': new Date(dateString)
    });
    return dateId;
  },
  bookDate: function(dateId){
    var dateId = Dates.update(dateId,{
      'bookedOn': new Date(),
      'user': Meteor.userId()
    });
    return dateId;
  }
});
