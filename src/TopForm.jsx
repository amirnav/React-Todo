import React, { useContext, useState } from 'react';
import { taskContext } from './taskContext';


const TopForm = ()=>{
    const[task,setTask]=useState("")
    const{taskItems,setTaskItems}=useContext(taskContext)
    const handleSetTask=(event)=>{
        setTask(event.target.value)
    }
    const handleAddTask=(event)=>{
        event.preventDefault()
        setTaskItems([...taskItems,{id:Math.random(),title:task,done:false}
        ])
        setTask("")
    }

    return(
        <>
            <h4 className="text-center text_shdow" style={{background:"grey",color:"white"}}>Welcome to my ToDo app</h4>
            <form onSubmit={handleAddTask}>
                <div className="form-group d-flex">                    
                    <input type="text" className="form-control" value={task} 
                    onChange={handleSetTask}/>
                    <button type="submit" className="btn btn-success me-1">Submit</button>
                </div>
            </form>
        </>
    )
}

export default TopForm;