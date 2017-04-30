/*
 * Author - Vinit Shahdeo
 * Website - www.vinitshahdeo.com
 * Email - vinitshahdeo@gmail.com
 * Copyright - Get Inspired 2017
 * Functions for getting random quotes
 */
function load() {
	     var mydata = JSON.parse(data); 
         var x = Math.floor((Math.random() * 60) + 1);
         document.getElementById('quote').innerHTML=mydata[x].saying;
         authorCredit="-"+mydata[x].author;
         document.getElementById('author').innerHTML=authorCredit;          
}

setInterval(load,6000);

function date_time()
{
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    
    
      hours=date.getHours();
      minutes = date.getMinutes();
 if(hours<10)
        {
                hours = "0"+hours;
        }
	if (minutes < 10) {
	 minutes = "0" + minutes;
  }
  
	var suffix = "AM";
    var greeting="Good Morning!";
    var message="Let's create a beautiful day.";
    if(hours<4)
        {
            var greeting="Good Night!"
            var message="It's time to sleep now."
        }
	if (hours >= 12) {
    suffix = "PM";
    var greeting="Good Afternoon!"
    var message="How are you doing today?";
    hours = hours - 12;
        if(hours>4)
            {
    var greeting="Good Evening!";
    var message="Did you enjoy today?"        
    }
        if(hours>9)
            {
                var greeting="Hello there!"
                var message="What did you learn today?"
            }
	}
	if (hours == 0) {
	 hours = 12;
	}

result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+hours + ":" + minutes + " " + suffix;
showDate = ''+months[month]+' '+d+', '+year;
showDay=days[day];
showMonth=months[month];
showTime=+hours + ":" + minutes + " " + suffix;
document.getElementById('date_time').innerHTML = showDate;
document.getElementById('time').innerHTML = showTime;
document.getElementById('greeting').innerHTML=greeting;
document.getElementById('message').innerHTML=message;
setTimeout('date_time();','1000');
return true;
}
setInterval(date_time,10);