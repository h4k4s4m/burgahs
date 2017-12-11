// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

// create a router to set up sub-routes through
var express = require("express");
var router = express.Router();


// ===============================================================================
// ROUTING
// ===============================================================================

//instead of doing app.get requests we now do router.get(post,put,delete) requests
// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
// ---------------------------------------------------------------------------

// localhost:8080/api/tables: (/api comes from server.js)
router.get("/tables", function(req, res) {
  res.json(tableData);
});

// localhost:8080/api/waitlist: (/api comes from server.js)
router.get("/waitlist", function(req, res) {
  res.json(waitListData);
});

// API POST Requests
// Below code handles when a user submits a form and thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate JavaScript array
// (ex. User fills out a reservation request... this data is then sent to the server...
// Then the server saves the data to the tableData array)
// ---------------------------------------------------------------------------

// localhost:8080/api/tables: (/api comes from server.js)
router.post("/tables", function(req, res) {
  // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
  // It will do this by sending out the value "true" have a table
  // req.body is available since we're using the body-parser middleware
  if (tableData.length < 5) {
    tableData.push(req.body);
    res.json(true);
  }
  else {
    waitListData.push(req.body);
    res.json(false);
  }
});

// ---------------------------------------------------------------------------
// I added this below code so you could clear out the table while working with the functionality.
// Don"t worry about it!

// localhost:8080/api/clear: (/api comes from server.js)
router.post("/clear", function() {
  // Empty out the arrays of data
  tableData = [];
  waitListData = [];

  console.log(tableData);
});

//instead of exporting a function, we export the router we created.
module.exports = router;
