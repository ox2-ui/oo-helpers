//
//      Session extensions
//

// Clear set session
Session.clear = function (sessionName) {
  delete Session.keys[sessionName]
}

// Toggle bool session value
Session.toggle = function (sessionName) {
  Session.set(sessionName, Session.get(sessionName) ? false : true)
}

// Toggle any session value
Session.toggleVal = function (sessionName, value1, value2) {
  Session.set(sessionName, Session.equals(sessionName, value1) ? value2 : value1)
}

//
//      Responsive layout helpers
//


// Set session largeScreen boolean based on reactive window helper
Tracker.autorun(function(){

  if (rwindow.innerWidth('gt', 767))
    Session.set("largeScreen", true);
  else
    Session.set("largeScreen", false);
});

// Global template helper for largescreen
Template.registerHelper("largeScreen", function () {
  return Session.get("largeScreen") ? true : false;
});

//
