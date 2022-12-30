var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
    title: 'SebaSphere!',
    age: getAge()
  });

});

router.get('/nsfw', function(req, res, next) {
  res.render('fumo', {
    title: '!'
  });

});

module.exports = router;

// gets my current age | https://www.javatpoint.com/calculate-age-using-javascript
function getAge() {
  const currentDate = new Date()

  const dob = new Date("03/16/2003");
  const month = dob.getMonth()
  const day = dob.getDate()
  //calculate month difference from current date in time
  const month_diff = Date.now() - dob.getTime();

  //convert the calculated difference in date format
  const age_dt = new Date(month_diff);

  //extract year from date
  const year = age_dt.getUTCFullYear();

  //now calculate the age of the user
  const age = Math.abs(year - 1970);
  if (month === currentDate.getMonth() && day === currentDate.getDate()) {
    return "now " + age + " today!";
  } else {
    return age;
  }
}