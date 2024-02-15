import React, {useState} from 'react';
import axios from 'axios';

function PersonForm() {

    const [postSuccess, setPostSuccess] = useState(false);

    const [personData, setPersonData] = useState({

        verdiMitglied: false,
        ausbildung: false,
        ausbildungsgang: '',
        jahrgang: '',
        betrieb: '',
        standort: '',
        mitgliedSeit: '',
        vl: false,

        // Felder der Person hier...
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Senden der Daten an die Backend-API
            const response = await axios.post('http://164.30.70.4:8080/api/v1/map', personData);

            console.log('Daten erfolgreich gesendet:', response.data);
            // Hier können Sie die Antwort des Servers verarbeiten oder eine Bestätigung für den Benutzer anzeigen

            setPostSuccess(true);

            // Optional: Setzen Sie die Formularfelder zurück
            setPersonData({
                betrieb: '',
                standort: '',
                jahrgang: '',
                mitgliedSeit: '',
                vl: false,
                ausbildung: false,
                ausbildungsgang: '',
                // Weitere Felder zurücksetzen...
            });
        } catch (error) {
            console.error('Fehler beim Senden der Daten:', error);
            // Hier können Sie eine Fehlermeldung für den Benutzer anzeigen
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

    const renderSuccessMessage = () => {
        if (postSuccess) {
            return (
                <div style={{color: 'green'}}>
                    Daten erfolgreich gesendet!
                </div>
            );
        }
        return null;
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
                            Ausbildung:
                            <input type="checkbox" name="ausbildung" checked={personData.ausbildung}
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

        </form>
    );
}

export default PersonForm;
