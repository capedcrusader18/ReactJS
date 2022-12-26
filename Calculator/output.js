import React from 'react';
import OutputRow from "./outputRow"

const output = props =>{
    return(
        <div>
            <OutputRow value={props.answer} textSize={{fontSize: '30px'}}/>
            <OutputRow value={props.user} textSize={{fontSize: '50px'}}/>
        </div>
    )
}

export default output;