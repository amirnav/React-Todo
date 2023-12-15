import React, { useContext } from 'react';
import { taskContext } from './taskContext';

const TaskItems = ()=>{
    const {taskItems,setTaskItems}=useContext(taskContext);
    const handleSetDoneTask=(id)=>{
        const index=taskItems.findIndex(t=>t.id===id)
        let newTaskItems=[...taskItems]
        newTaskItems[index].done=!newTaskItems[index].done;
        setTaskItems(newTaskItems);
    }
    const handleTrashItems=(id)=>{
        let newTask=taskItems.filter(t=>t.id!== id);
        setTaskItems(newTask);
    }
    if (taskItems.length) {
        return (
            <ul className="list-group m-0 p-0 mt-2">
                {
                    taskItems.map(t=>(
                        <div>
                           {t.done ? (
                            <li className='list-group-item d-flex justify-content-between list-group-item-success'>
                               {t.title}{setTaskItems}
                                <span>                                
                                    <i className="me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow"onClick={()=>handleSetDoneTask(t.id)}></i>
                                    <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"onClick={()=>handleTrashItems(t.id)}></i>
                                </span>                        
                            </li>
                                ):(
                                    <>
                                    <li className='list-group-item d-flex justify-content-between'>
                                        {t.title}{setTaskItems}                                
                                    <span>
                                        <i className="me-3 pointer fas fa-check text-success transition_200 text_hover_shadow"onClick={()=>handleSetDoneTask(t.id)}></i>
                                        <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"onClick={()=>handleTrashItems(t.id)}></i>
                                    </span>
                                    </li>
                                    </>                                       
                                    )                           
                                 }                                                  
                            </div>
                        )                       
                    )
                }          
            </ul>    
        )
    }
    else{
        return(
            <h5 className='text-center text-danger'>Without any task</h5>
        )
        
    }
    
}
export default TaskItems;