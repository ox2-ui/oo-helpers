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

