// src/components/PersonList.js

import React, {useEffect, useState} from 'react';


import './style.css';
import ASGangTypeFilter from "./ASGangTypeFilter";
import ASGangListeTypen from "./ASGangListeTypen";
import axios from "axios";
import AddPerson from "./AddPerson";


const PersonList = () => {

    const [persons, setPersons] = useState([]);
    const [selectedASGangType, setSelectedASGangType] = useState(null);
    const [filterASGangType, setFilterASGangType] = useState('');

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


    const handleASGangTypeClick = (aSGangType) => {

        setSelectedASGangType(aSGangType);

        setFilterASGangType(aSGangType); // Set filter to selected aSGang type

    };



    const handleFilterChange = (event) => {

        setFilterASGangType(event.target.value);

        setSelectedASGangType(null);

    };



    return (

        <div>

            <h2>Person List</h2>



            <label>

                Filter by ASGang Type:{' '}

                <input

                    type="text"

                    value={filterASGangType}

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


            {selectedASGangType && (

                <ASGangListeTypen

                    aSGangs={persons

                        .flatMap((person) => person.aSGangs)

                        .filter(
                            (aSGang) => aSGang.aSGangType.toLowerCase() === selectedASGangType.toLowerCase()

                        )}

                    selectedASGangType={selectedASGangType}

                />

            )}

            <AddPerson on AddPerson={handleAddPerson}/>

        </div>

    );

};



export default PersonList;
