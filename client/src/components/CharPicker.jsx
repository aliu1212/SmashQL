import React from 'react';
import MiniChar from './MiniChar.jsx'

const CharPicker = (props) => { 
  return (
    <div className='main-page__charpicker'>
      {
        props.allCharacters.map((oneChar, index) => {
          return <MiniChar oneChar={oneChar} key={index} />
        })
      }
    </div>
  );
}

export default CharPicker;