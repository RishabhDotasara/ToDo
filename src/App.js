import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import { useEffect, useState, useRef } from 'react';

const endpoints = {
    "get":"https://ghc-applications-api.vercel.app/todos", //the same to create a new todo, just that it will be a POST request.
    "update":"https://ghc-applications-api.vercel.app/updatetodos", //PUT request
    "delete":"https://ghc-applications-api.vercel.app/todos/" // +id DELETE request

}


  // {
  //   title:"Todo",
  //   id:"sdfasdfas",
  //   completed: true,
  //   updatedAt:"2024-03-05T21:39:24.740Z",
  //   createdAt:"2024-03-05T21:34:16.218Z"
  // },
  // {
  //   title:"Todo",
  //   id:"sdfasdfas",
  //   completed: true,
  //   updatedAt:"2024-03-05T21:39:24.740Z",
  //   createdAt:"2024-03-05T21:34:16.218Z"
  // },
  // {
  //   title:"Todo",
  //   id:"sdfasdfas",
  //   completed: true,
  //   updatedAt:"2024-03-05T21:39:24.740Z",
  //   createdAt:"2024-03-05T21:34:16.218Z"
  // }
// useEffect(()=>{

// },[data]);


function App() {


  const [todos, setTodos] = useState([...JSON.parse(localStorage.getItem('todos'))]);
  const text = useRef(null);

  const addTask = (task)=>{
    setTodos([...todos,`${task}`])
    text.current.value = null
  }
  
  const removeTask = (task)=>
  {
      setTodos([...todos].filter(item => item !== task))
  }

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])


  return (
    <div className='container'>
          <div className='wrapper'>
            <div className='search_box'>  
              <input placeholder="What's the next task?" ref={text}/>
        
              <button onClick={()=>{text.current.value && addTask(text.current.value)}}>Add</button>
            </div>
            <div className='tasks'>
              {
                todos.map((item)=>{
                    return (
                      <Task title={item} deleteFn = {removeTask}/>
                    )
                })
              }
            </div>
          </div>
    </div>
  );
}

export default App;
