
import './App.css';
import {useState} from "react";

function App() {
  const [todo,settodo] = useState([]);
  const [newtask,setnewtask] = useState("");
   
  const handlechange = (event) => {
    setnewtask(event.target.value);
  };
  const addtask = () => { 
    const task = {
      id: todo.length === 0 ? 1:todo[todo.length - 1].id+1,
      taskName: newtask,};
    settodo( [...todo,task]);
  };

  const removetask = (id) => {
  settodo(todo.filter((task)=>task.id !== id));
  };



  return (
    <div className="App">
       <div className="header">
        <h1>TO-DO LIST</h1>
        <div className="addTask">
          <button className="first" onClick={addtask}>ADD TASK</button>
          <input className="first" onChange={handlechange} />
        </div>
         </div>
         <div className="list">
         {todo.map((task)=>{
          return (
          <div>
          <h1 class = "second">{task.taskName}</h1> 
          <button class= "second" id="done" onClick={()=>removetask(task.id)}>Done</button>
          </div>);
        })}
      </div>  
    </div>
  ); 
}

export default App;

