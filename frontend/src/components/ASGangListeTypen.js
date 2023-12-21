// src/components/ASGangListByType.js

import React from 'react';
import './style.css';


const ASGangListByType = ({aSGangs, selectedASGangType}) => {

    return (

        <div>

            <h3>ASGangs of Type: {selectedASGangType}</h3>

            <ul>

                {aSGangs

                    .filter((aSGang) => aSGang.aSGangType === selectedASGangType)

                    .map((aSGang) => (

                        <li key={aSGang.aSGang}>

                            <strong>ASGang Name:</strong> {aSGang.aSGang}

                        </li>

                    ))}

            </ul>

        </div>

    );

};


export default ASGangListByType;