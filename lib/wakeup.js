isAdmin = function(){
  try{
    var username = Meteor.user().services.github.username;
    return username == "Jamedjo";
  } catch(e) {
    return false;
  }
}

dates = [
"29-Nov-2013",
"2-Dec-2013",
"3-Dec-2013",
"4-Dec-2013",
"5-Dec-2013",
"6-Dec-2013",
"9-Dec-2013",
"10-Dec-2013",
"11-Dec-2013",
"12-Dec-2013",
"13-Dec-2013",
"16-Dec-2013",
"17-Dec-2013",
"18-Dec-2013",
"19-Dec-2013",
"20-Dec-2013"
];