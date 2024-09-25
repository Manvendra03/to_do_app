export function getDayFromIndex(index) 
{
    if(index < 0 || index > 6)
    {
        return "Invalid";
    }

    switch(index)
    {
       case 0: 
          return "Sunday";
       
       case 1: 
          return "Monday";
         
       case 2: 
          return "Tuesday";
          
       case 3: 
          return "Wednessday";
        
       case 4: 
          return "Thursday";
       
       case 5: 
          return "Friday";
    
       case 6: 
          return "Saturday";
       
    }

}


export function getMonthFromIndex(index)
{
        const months = [
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
        ];
    
        if (index >= 0 && index < 12) {
            return months[index];
        } else {
            return "Invalid index";
        }
}

export function getTimeFromHoursAndMinutes(hours, minutes)
{
    var x = hours > 11 ? "PM" : "AM"; 
    
    // console.log("-->", hours);
    if(x == "PM")
     {    
        if(hours != 12)
        {
            hours = hours - 12;      
        }
    }
    else if(hours == 0)
        {
              hours =12;
        } 
        
        console.log(typeof(minutes));

        if(minutes < 10)
        {
             minutes= "0"+minutes;
        }
        console.log("update",minutes);
        var timeString = hours+" : "+minutes+ " "+x;
        return timeString;
} 