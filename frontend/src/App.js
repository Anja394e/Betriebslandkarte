import React from 'react';
import PersonList from './components/PersonList';
import PersonForm from "./components/AddPerson";


function App() {
    return (
        <div className="personenliste">
            <h1>React Spring Boot App</h1>
            <PersonList/>
            <h1>Meine Anwendung</h1>
            <PersonForm/>
        </div>

    );
}


export default App;