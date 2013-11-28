isAdmin = function(){
  try{
    var username = Meteor.user().services.github.username;
    return username == "Jamedjo";
  } catch(e) {
    return false;
  }
}