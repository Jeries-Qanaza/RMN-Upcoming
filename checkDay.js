// import days files
import sunday    from "./weekly_programs/sundayProgs.js"
import monday    from "./weekly_programs/mondayProgs.js";
import tuesday   from "./weekly_programs/tuesdayProgs.js";
import wednesday from "./weekly_programs/wednesdayProgs.js";
import thursday  from "./weekly_programs/thursdayProgs.js";
import friday    from "./weekly_programs/fridayProgs.js";
import saturday  from "./weekly_programs/saturdayProgs.js";

var today = new Date();

//////////////////////////////////////////////////////// get day
var daynum=today.getDay(); //number 0-Sunday 6-Saturday
var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

//////////////////////////////////////////////////////// get time
var hour = today.getHours();
var minute= today.getMinutes();
minute*=0.01; //time convertor
var time=hour+minute; //example --> 16.37

////////////////////////////////////////////////////////

var day = weekday[daynum];  //string
if (day == "Sunday") { sunday(time) }
else if (day == "Monday") { monday(time) }
else if (day == "Tuesday") { tuesday(time) }
else if (day == "Wednesday") { wednesday(time) }
else if (day == "Thursday") { thursday(time) }
else if (day == "Friday") { friday(time) }
else if (day == "Saturday") { saturday(time) }
export default { day, time }


