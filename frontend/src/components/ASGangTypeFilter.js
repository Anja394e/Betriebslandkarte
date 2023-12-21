// src/components/ASGangTypeFilter.js

import React from 'react';


const ASGangTypeFilter = ({aSGangType, onClick}) => {

    return (

        <span className="aSGangTypeFilter" onClick={() => onClick(aSGangType)}>

            {aSGangType}

    </span>

    );

};


export default ASGangTypeFilter;
