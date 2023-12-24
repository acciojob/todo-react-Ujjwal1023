
import React,{useState}  from "react";
import './../styles/App.css';

const App = () => {

  const [toDo,setToDo]=useState("");
  const[toDoList,setToDoList]=useState([]);
  const[id,setId]=useState(1);

  console.log(toDoList);

  function addToDo(e){
   e.preventDefault()
   setToDoList([...toDoList,{id:id,title:toDo}])
   setToDo("");
   setId(id+1)
  }



  function deleteToDo(delete_id){
   
    setToDoList(toDoList.filter((item)=> item.id!==delete_id))

    }
  


  return (
    <div>
      <h1>To-Do List</h1>
     <form onSubmit={addToDo}>
      <input type="text" placeholder="Enter to do"
      onChange={(event)=>setToDo(event.target.value)}
      value={toDo}
        />
        <button type="submit">Add to do</button>
     </form>

     <ul>
      {toDoList.map((item)=>{
      return <li key={item.id}>{item.title}
      <button onClick={()=>deleteToDo(item.id)}>Delete</button>
      </li>
      })}
     </ul>
    </div>
    
  )
}

export default App
