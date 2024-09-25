export  function getImageWithCategory(category){
    
    switch (category)
    {
        case 'Development': 
             return require('../assets/task_Icons/eat.png');
             
        case 'Shopping': 
             return require('../assets/task_Icons/cart.png');
        
        case 'Meeting': 
             return require('../assets/task_Icons/meet.png');
             
        case 'Design': 
        return require('../assets/task_Icons/brush.png');
        
        case 'Business': 
             return require('../assets/task_Icons/business.png');
             
        case 'Learning': 
        return require('../assets/task_Icons/book.png');
        
        case 'Other': 
             return require('../assets/task_Icons/other.png');
    }
}