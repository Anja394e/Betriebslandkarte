import React, {useState} from 'react';
import axios from 'axios';

function PersonForm() {
    const [postSuccess, setPostSuccess] = useState(false);
    const [postError, setPostError] = useState(false);

    const [personData, setPersonData] = useState({
        verdiMitglied: false,
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

    const handleInputChange = (event) => {
        const {name, value, type, checked} = event.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setPersonData({
            ...personData,
            [name]: inputValue,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <div>
                        <label>
                            ver.di Mitglied:
                            <input type="checkbox" name="verdiMitglied" checked={personData.verdiMitglied}
                                   onChange={handleInputChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Ausbildungs- oder Studiengang:
                            <input type="text" name="ausbildungsgang" value={personData.ausbildungsgang}
                                   onChange={handleInputChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Jahrgang:
                            <input type="text" name="jahrgang" value={personData.jahrgang}
                                   onChange={handleInputChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Betrieb:
                            <input type="text" name="betrieb" value={personData.betrieb} onChange={handleInputChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Standort:
                            <input type="text" name="standort" value={personData.standort}
                                   onChange={handleInputChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Mitglied seit:
                            <input type="text" name="mitgliedSeit" value={personData.mitgliedSeit}
                                   onChange={handleInputChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            VL:
                            <input type="checkbox" name="vl" checked={personData.vl} onChange={handleInputChange}/>
                        </label>
                    </div>
                </div>
                {/* Weitere Eingabefelder hier... */}
                <button type="submit">Person Hinzufügen</button>
            </div>

            {/* Erfolgsmeldung */}
            {postSuccess && <div style={{color: 'green'}}>Daten erfolgreich gesendet!</div>}
            {/* Fehlermeldung */}
            {postError && <div style={{color: 'red'}}>Fehler beim Senden der Daten!</div>}
        </form>
    );
}

export default PersonForm;
