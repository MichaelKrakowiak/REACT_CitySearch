import Search from "./Components/FindCity/Search";
import CitiesList from "./Components/FindCity/CitiesList";
import { useEffect, useState } from 'react';
import './style.scss';

function App() {

    const [cities, setCities] = useState([]);
    const [search, setSearch] = useState('Marcy');


    const fetchCities = async () => {
            try {
                const response = await fetch('https://geo.api.gouv.fr/' + search);
                const data = await response.json();
                setCities(data);

                console.log(data)

            } catch (error) {
                alert('Erreur lors de la récupération des données.');
            }
        };

    useEffect(() => {
        fetchCities();
    }, [search]);


    return (
        <main>
            <h1 className="app_mainTitle">Trouve ta ville !</h1>
            <h2 className="app_title">Recherche par nom de commune (1 lettre minimum), code-postal (5 chiffres obligatoires) ou département (2 chiffres obligatoires) </h2>
            <Search setSearch={setSearch} />
            <CitiesList cities={cities} />
        </main>
    )
};


export default App; 