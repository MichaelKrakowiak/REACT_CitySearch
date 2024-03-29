import Item from "./Item";

function CitiesList() {
    return (
        <>
        <div>
            <p>Résultat(s) de la recherche</p>
            <button type="submit">Changer le format</button>
        </div>
        <div>
            <Item />
            <Item />
            <Item />
        </div>
        </>
    )
};

export default CitiesList;