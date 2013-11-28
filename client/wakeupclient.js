if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "James needs to wake up to code!";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}
