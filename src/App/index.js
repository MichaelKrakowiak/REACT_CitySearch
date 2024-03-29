function App() {
    return (
        <main>
            <h1>Recherche par nom de commune</h1>
            <form>
                <label>
                    <span>Nom de la commune</span>
                    <input
                        placeholder="Lyon, Paris, Strasbourg, ..."
                        type="search"
                    />
                </label>
                <button type="submit">Lancer la recherche</button>
            </form>
            <div>
                <p>Résultat</p>
                <button type="submit">Changer le format</button>
            </div>
            <div>
                <ul>
                    <li>Nom de la ville<span> - département</span></li>
                    <li>Code Postal :<span> XXXXX</span></li>
                    <li>Population : <span> 123456</span></li>
                </ul>
                <ul>
                    <li>Nom de la ville<span> - département</span></li>
                    <li>Code Postal :<span> XXXXX</span></li>
                    <li>Population : <span> 123456</span></li>
                </ul>
            </div>
        </main>
    )
};


export default App;