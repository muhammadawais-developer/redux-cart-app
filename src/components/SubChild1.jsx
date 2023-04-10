import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment } from '../features/showSlice'

const SubChild1 = () => {

  const dispatch = useDispatch()
  const data = useSelector((data) => {
    console.log(data.show.value)
    return data.show.value
  })
  return (
    <div>
      <h2>subchild1 value - {data}</h2>
      <button onClick={() => dispatch(increment())}>click me </button>
    </div>
    
  )
}

export default SubChild1