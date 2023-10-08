import React from 'react'
import Headeradm from './Headeradm'


const Main = (props) => {
  return (
    <div>
        <Headeradm/>
     {props.child}
    </div>
  )
}

export default Main