var express = require("express");
var router = express.Router();

/* GET patients listing. */
router.get("/", function (req, res, next) {
  res.json([
    {
      id: 1,
      firstName: "Roy",
      lastName: "Rai",
      dob: "10/16/1999",
      phoneNumber: "6268776692",
      email: "roy@gmail.com",
      notes: [],
    },
    {
      id: 2,
      firstName: "Victor",
      lastName: "patel",
      dob: "10/19/1995",
      phoneNumber: "1234567890",
      email: "victor16@gmail.com",
      notes: [],
    },
    {
      id: 3,
      firstName: "Robbert",
      lastName: "Brown",
      dob: "09/21/1985",
      phoneNumber: "6268006682",
      email: "robbert@gmail.com",
      notes: [],
    },
    {
      id: 4,
      firstName: "Alex",
      lastName: "Reddy",
      dob: "09/21/2000",
      phoneNumber: "4248006682",
      email: "alex@gmail.com",
      notes: [],
    },
    {
      id: 5,
      firstName: "Critina",
      lastName: "Barac",
      dob: "01/01/2015",
      phoneNumber: "4248009882",
      email: "critina@gmail.com",
      notes: [],
    },
    {
      id: 6,
      firstName: "Brian",
      lastName: "Kapoor",
      dob: "08/30/2001",
      phoneNumber: "6234567682",
      email: "brain@gmail.com",
      notes: [],
    },
  ]);
});

module.exports = router;
