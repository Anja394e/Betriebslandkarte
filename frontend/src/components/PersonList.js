// src/components/PersonList.js

import React, {useEffect, useState} from 'react';


import './style.css';
import StandortFilter from "./StandortFilter";
import StandortListeTypen from "./StandortListeTypen";
import axios from "axios";
import AddPerson from "./AddPerson";


const PersonList = () => {

    const [persons, setPersons] = useState([]);
    const [selectedStandort, setSelectedStandort] = useState(null);
    const [filterStandort, setFilterStandort] = useState('');

    const handleAddPerson = (newPerson) => {
        setPersons([...persons, newPerson]);
    };

    const getMembershipStatus = (isMember) => {
        return isMember ? 'Ja!' : 'Nein, noch nicht';
    };



    useEffect(() => {
        const fetchPersons = async () => {
            try {

                //Wichtig: hier werden die Daten vom Backend-Server mit axios in response gespeichert
                const response = await axios
                    .get('http://164.30.70.4:8080/api/v1/map')

                console.log(response);

                //hier werden die Backend Daten über die Personen in setPersons gespeichert
                setPersons(response.data);
            } catch (error) {
                console.error('Error fetching persons:', error);
                // Hier können Sie eine State-Variable setzen, um den Fehler zu handhaben
            }
        };

        fetchPersons();
    }, []);


    const handleStandortClick = (Standort) => {

        setSelectedStandort(Standort);

        setFilterStandort(Standort); // Set filter to selected aSGang type

    };



    const handleFilterChange = (event) => {

        setFilterStandort(event.target.value);

        setSelectedStandort(null);

    };



    return (

        <div>

            <h2>Person List</h2>



            <label>

                Filter by ASGang Type:{' '}

                <input

                    type="text"

                    value={filterStandort}

                    onChange={handleFilterChange}

                />

            </label>

 

            <ul>
               

                {persons.map((person) => ( //Wichtig: hier werden die Variablen auf ihr gewolltes Verhalten hin gemappt

                    <li key={person.id}>

                        <strong>Mitglied:</strong> {getMembershipStatus(person.mitglied)} <br/>
                        <strong>Betrieb, Standort:</strong> {person.betrieb} {person.standort} <br/>
                        <strong>Erstell Datum:</strong> {person.erstellDatum} <br/>
                        <strong>Jahrgang:</strong> {person.jahrgang} <br/>
                        <strong>VL:</strong> {person.vl ? 'Ja' : 'Nein'} <br/>

                    </li>

                ))}

            </ul>


            <form onSubmit={handleSubmit}>
            {/* Formularelemente bleiben unverändert */}
            <div>
                <label>
                    Standort auswählen:
                    <select value={selectedStandort} onChange={handleStandortChange}>
                        <option value="">Alle Standorte</option>
                        {/* Hier die Optionen für die Standorte einfügen */}
                    </select>
                </label>
            </div>

            {selectedStandort && (
                <StandortListeTypen
                    Standort={persons
                        .filter((person) => person.standort.toLowerCase() === selectedStandort.toLowerCase())
                    }
                    selectedStandort={selectedStandort}
                />
            )}

            <AddPerson on AddPerson={handleAddPerson}/>

        </div>

    );

};



export default PersonList;
