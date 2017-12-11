// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// create a router to set up sub-routes through
var express = require("express");
var router = express.Router();


// ===============================================================================
// ROUTING
// ===============================================================================
//instead of doing app.get requests we now do router.get(post,put,delete) requests
// HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content
// ---------------------------------------------------------------------------

// localhost:8080/tables:
router.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/tables.html"));
});

// localhost:8080/reserve:
router.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/reserve.html"));
});

// localhost:8080/:
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/reserve.html"));
});

// localhost:8080/<anything that wasnt a match>:
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/error.html"));
});

//we now export router instead
module.exports = router;
