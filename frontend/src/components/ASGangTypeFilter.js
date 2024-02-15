// src/components/StandortFilter.js

import React from 'react';


const StandortFilter = ({Standort, onClick}) => {

    return (

        <span className="StandortFilter" onClick={() => onClick(Standort)}>

            {Standort}

    </span>

    );

};


export default StandortFilter;
