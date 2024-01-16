import React, { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'; // Import CSS
import './Contact.css'
const TwoDimensionalRangeInput = () => {
  const [state, setState] = useState({ min: 2, max: 10 })

  return (
    <div style={{padding:'10rem'}}>
      <InputRange
        maxValue={20}
        minValue={0}
        value={state}
        step={1}
        allowSameValues="true"
        // draggableTrack="true"
        onChange={value => setState({ ...value })}
      /> 
    </div>
  );
};

export default TwoDimensionalRangeInput;
