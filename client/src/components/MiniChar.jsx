import React from 'react';

const MiniChar = (props) => { 
  return (
    <div className='charpicker-minichar'>
      <picture>
        {/* <source media="(min-width: 650px)" srcset="img_pink_flowers.jpg"> */}
        {/* <source media="(min-width: 465px)" srcset="img_white_flower.jpg"> */}
        <img src={props.oneChar.pic_url} srcSet={props.oneChar.pic_url} alt="char" />
      </picture>
      <div>
        {props.oneChar.name}
      </div>
    </div>
  );
}

export default MiniChar;