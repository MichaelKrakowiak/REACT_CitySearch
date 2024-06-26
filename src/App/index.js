import Search from "./Components/FindCity/Search";
import CitiesList from "./Components/FindCity/CitiesList";
import { useEffect, useState } from 'react';
import './style.scss';

function App() {

    const [cities, setCities] = useState([]);
    const [search, setSearch] = useState('communes?nom=$Marcy');


    const fetchCities = async () => {
            try {
                const response = await fetch('https://geo.api.gouv.fr/' + search);
                const data = await response.json();
                setCities(data);

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
            <p className="app_title">Recherche par nom de commune (1 lettre minimum),</p>
            <p className="app_title">Recherche par code-postal (5 chiffres obligatoires),</p>
            <p className="app_title">Recherche par département (2 chiffres obligatoires pour la France Métropolitaine ou 3 chiffres obligatoires pour l'Outre-Mer) </p>
            <Search setSearch={setSearch} />
            <CitiesList cities={cities} />
        </main>
    )
};


export default App; 