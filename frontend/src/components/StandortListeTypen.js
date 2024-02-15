// src/components/StandortListByType.js

import React from 'react';
import './style.css';


const StandortListByType = ({Standorts, selectedStandortType}) => {

    return (

        <div>

            <h3>Standorts of Type: {selectedStandortType}</h3>

            <ul>

                {Standorts

                    .filter((Standort) => Standort.StandortType === selectedStandortType)

                    .map((Standort) => (

                        <li key={Standort.Standort}>

                            <strong>Standort Name:</strong> {Standort.Standort}

                        </li>

                    ))}

            </ul>

        </div>

    );

};


export default StandortListByType;
