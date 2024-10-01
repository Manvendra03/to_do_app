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

export function convertDateStringToDate(dateStr) {
    // Ensure the input is a string
    if (typeof dateStr !== 'string') {
      console.error('Input must be a string');
      return null;
    }
  
    // Remove the weekday part (after the comma)
    const [datePart] = dateStr.split(','); // Split at the comma to get the date part (ignore the weekday)
    
    // Split the remaining string into day, month, and year
    const [day, month, year] = datePart.trim().split(' '); // Split by spaces
    
    // Define a map for month names to their numeric equivalents
    const monthNames = {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11
    };
  
    // Get the numeric value for the month
    const monthNumber = monthNames[month];
  
    if (monthNumber === undefined) {
      console.error('Invalid month name');
      return null;
    }
  
    // Create and return a new Date object
    return new Date(year, monthNumber, day);
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


// export function checkStartandEndTime (startTime, endTime , showWarning){
//   //  Check if startTime and endTime are set
//   if (!startTime || !endTime) {
//     alert('Please set both start and end times.');
//     return;
//   }

//   // Parse start time
//   const [startHour, startMinutePart] = startTime.split(':');
//   const [startMinute, startPeriod] = startMinutePart.trim().split(' ');

//   const startTimeDate = new Date();
//   startTimeDate.setHours(
//     startPeriod.toUpperCase() === 'PM' && parseInt(startHour, 10) < 12
//       ? parseInt(startHour, 10) + 12
//       : startPeriod.toUpperCase() === 'AM' && parseInt(startHour, 10) === 12
//       ? 0
//       : parseInt(startHour, 10),
//   );
//   startTimeDate.setMinutes(parseInt(startMinute, 10));

//   // Parse end time
//   const [endHour, endMinutePart] = endTime.split(':');
//   const [endMinute, endPeriod] = endMinutePart.trim().split(' ');

//   const endTimeDate = new Date();
//   endTimeDate.setHours(
//     endPeriod.toUpperCase() === 'PM' && parseInt(endHour, 10) < 12
//       ? parseInt(endHour, 10) + 12
//       : endPeriod.toUpperCase() === 'AM' && parseInt(endHour, 10) === 12
//       ? 0
//       : parseInt(endHour, 10),
//   );
//   endTimeDate.setMinutes(parseInt(endMinute, 10));

//   // Check if start time is less than end time
//   if (startTimeDate.getTime() < endTimeDate.getTime()) {
//     // Proceed with creating the timer or any desired action
//     console.log('Start time is valid. Proceeding...');
//     // Your code to create the timer here
//   } else {
//     // Alert the user about the invalid time
//     // alert('Invalid time: Start time must be less than End time.');
//     showWarning(true);
//   }
// };