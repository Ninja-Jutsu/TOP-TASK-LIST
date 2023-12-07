export default function tasksFactory(title ,notes, date, priority ){
    return{
        obj(){
            return {title : title,
                    notes : notes,
                    date : date,
                    priority : priority}
        }
    }
}

