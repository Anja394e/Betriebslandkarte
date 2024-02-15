import React, {useState} from 'react';
import axios from 'axios';

// Import-Anweisungen und PersonForm-Komponentendefinition bleiben unverändert

function PersonForm() {
    const [postSuccess, setPostSuccess] = useState(false);
    const [postError, setPostError] = useState(false);

    const [personData, setPersonData] = useState({
        verdiMitglied: false,
        ausbildung: false,
        ausbildungsgang: '',
        jahrgang: '',
        betrieb: '',
        standort: '',
        mitgliedSeit: '',
        vl: false,
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Senden der Daten an die Backend-API
            const response = await axios.post('http://164.30.70.4:8080/api/v1/map', personData);
            console.log('Daten erfolgreich gesendet:', response.data);
            setPostSuccess(true);
            setPostError(false);
        } catch (error) {
            console.error('Fehler beim Senden der Daten:', error);
            setPostSuccess(false);
            setPostError(true);
        }
    };

    // Aktualisierte handleInputChange-Funktion
    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setPersonData((prevPersonData) => ({
            ...prevPersonData,
            [name]: inputValue,
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Formularelemente bleiben unverändert */}

            {/* Erfolgsmeldung und Fehlermeldung bleiben unverändert */}
        </form>
    );
}

export default PersonForm;
