import Search from "./Components/FindCity/Search";
import CitiesList from "./Components/FindCity/CitiesList";
import { useEffect, useState } from 'react';
import './style.scss';

function App() {

    const [cities, setCities] = useState([]);

    const fetchCities = async () => {
        try {
            const response = await fetch('https://geo.api.gouv.fr/communes?nom=Marcy');
            const data = await response.json();
            setCities(data);

            console.log(data)
            
        } catch (error) {
            alert('Erreur lors de la récupération des données.');
        }
    };

    useEffect(() => {
        fetchCities();
    }, []);


    return (
        <main>
            <h1 className="app_mainTitle">Trouve ta ville !</h1>
            <h2 className="app_title">Recherche par nom de commune ou code-postal</h2>
            <Search/>
            <CitiesList cities={cities}/>
        </main>
    )
};


export default App; 