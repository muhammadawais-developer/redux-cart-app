import React from 'react'
import SubChild1 from './SubChild1'

const Child1 = (props) => {
  return (
    <div>
        child1 value - {props.value}
        <SubChild1 value={props.value} />
    </div>
  )
}

export default Child1