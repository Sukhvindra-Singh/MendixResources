import React, {createElement} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function Tab(props) {
    let style = {
      ...props.style,
      color: props.color,
      fontSize: props.size,
    }
  return (
    <div>
        <FontAwesomeIcon icon={props.icon} style={style} className={props.class}/>
    </div>
  )
}

export default Tab