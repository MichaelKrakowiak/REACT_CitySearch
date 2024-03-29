import Item from "./Item";

function CitiesList({cities}) {
    return (
        <>
        <div>
            <p>Résultat(s) de la recherche</p>
            <button type="submit">Changer le format</button>
        </div>
        <div>
        {cities.map((city) => (
                <Item
                    key={city.code}
                    cityName={city.nom}
                    zipCode={city.codesPostaux[0]}
                    department={city.codeDepartement}
                    population={city.population} />
            ))}
        </div>
        </>
    )
};

export default CitiesList;