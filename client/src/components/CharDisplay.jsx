import React from 'react';

const CharDisplay = (props) => { 
  return (
    <div className='main-page__chardisplay'>
      {
        props.currChar ? 
          "hello" : 
          "Choose a character..."
      }
    </div>
  );
}

export default CharDisplay;