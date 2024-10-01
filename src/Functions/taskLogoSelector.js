export  function getImageWithCategory(category){
    
    switch (category)
    {
        case 'Education': 
             return require('../assets/task_Icons/book.png');
             
        case 'Shopping': 
             return require('../assets/task_Icons/cart.png');
        
        case 'Fitness': 
             return require('../assets/task_Icons/dumbbell.png');
             
        case 'Work': 
             return require('../assets/task_Icons/business.png');
        
        case 'Social': 
             return require('../assets/task_Icons/meet.png');
             
        
        case 'Meeting': 
             return require('../assets/task_Icons/meet.png');
                  
        case 'Meal': 
             return require('../assets/task_Icons/eat.png');
        
        case 'Other': 
             return require('../assets/task_Icons/other.png');
             
        case 'Appointment': 
            return require('../assets/task_Icons/appointment.png');
    }
}