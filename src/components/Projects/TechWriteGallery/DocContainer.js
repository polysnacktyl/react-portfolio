import React from 'react';
import Doc from './Doc';
import { useLocation } from 'react-router-dom';

function DocContainer() {
    let data = useLocation();
    console.log(data);
    return(
        <div>
            <Doc data={data} />
        </div>
    )
};
  
export default DocContainer;