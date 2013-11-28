isAdmin = function(){
  try{
    var username = Meteor.user().services.github.username;
    return username == "Jamedjo";
  } catch(e) {
    return false;
  }
}

bookable_dates = [
{date:"29-Nov-2013"},
{date:"2-Dec-2013"},
{date:"3-Dec-2013"},
{date:"4-Dec-2013"},
{date:"5-Dec-2013"},
{date:"6-Dec-2013"},
{date:"9-Dec-2013"},
{date:"10-Dec-2013"},
{date:"11-Dec-2013"},
{date:"12-Dec-2013"},
{date:"13-Dec-2013"},
{date:"16-Dec-2013"},
{date:"17-Dec-2013"},
{date:"18-Dec-2013"},
{date:"19-Dec-2013"},
{date:"20-Dec-2013"}
];