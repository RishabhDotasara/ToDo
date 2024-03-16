import React from 'react'

export default function Task(props) {

  return (
    <div className='task'>
      <span className='title'>{props.title}</span>
      <div>
        <button onClick={()=>{ props.deleteFn(props.title)}}>delete</button>
        <button onClick={()=>{ props.deleteFn(props.title)}}>Done</button>

      </div>
    </div>
  )
}
