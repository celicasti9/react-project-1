//import "../styles/list.css"
import React, { useState } from 'react';
import DeleteButton from "./DeleteButton";

function List( props ) {

  return (
    <div className="list">
      <div>
        {props.children}
    
      </div>
    </div>
  );
}

export default List;
