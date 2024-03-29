function Search () {
    return (
        <>
            <form>
                <label>
                    <span>Nom de la commune</span>
                    <input
                        placeholder="Lyon, Paris, Strasbourg, ..."
                        type="search"
                        className='searchBar'
                    />
                </label>
                <button type="submit">Lancer la recherche</button>
            </form>
            
        </>
    )
}

export default Search;