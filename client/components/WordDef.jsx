import React, { useEffect, useState } from 'react';

const WordDef = props => {
  return (
    <div className='word-def-div'>
      <h2>{props.word}</h2>
      <p className='definition-p'>{props.def}</p>
    </div>
  );
};

export default WordDef;
