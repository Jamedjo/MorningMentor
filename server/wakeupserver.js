
Meteor.startup(function () {
  if(Dates.find().count()==0){
    _.each(bookable_dates,function(dateString){
      Meteor.call('addDate',dateString);
    });
  }
});

Meteor.methods({
  addDate: function(dateString){
    if(dateString){
      var dateId = Dates.insert({
        'date': new Date(dateString)
      });
      return dateId;
    }
  },
  bookDate: function(dateId){
    Dates.update(dateId,{$set:{
      'bookedOn': new Date(),
      'user': Meteor.userId(),
      'username': Meteor.user().profile.name
    }});
    return dateId;
  },
  unbookDate: function(dateId){
    Dates.update(dateId,{$unset:{
      'bookedOn': null,
      'user': null,
      'username': null
    }});
    return dateId;
  }
});
