import { useState } from "react";

import './style.scss';


function Search({ setSearch }) {

    const [value, setValue] = useState('Marcy');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value) {
            if (isNaN(value)) {
                setSearch(`communes?nom=${value}`)
            } else {
                if(value.length <=3){
                    setSearch(`departements/${value}/communes`)
                } else if (value.length === 5){
                    setSearch(`communes?codePostal=${value}`)
                } else {
                    alert ('Veuillez modifier votre recherche : 2 chiffres pour les départements ou 5 pour le code postal')
                }
            }

        } else {
            alert('La recherche ne peut être vide - Veuillez préciser un charactère ou un chiffre au minimum')
        }
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="search_form">
                <label>
                    <input
                        placeholder="Lyon, Paris, Strasbourg, ..."
                        type="search"
                        className='search_bar'
                        onChange={handleChange}
                        value={value}
                    />
                </label>
                <button type="submit" className="search_button">Chercher</button>
            </form>

        </>
    )
}

export default Search;