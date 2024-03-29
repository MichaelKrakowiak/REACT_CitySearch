function City({cityName, zipCode, department, population}) {

    return (
        <>
            <ul>
            <li className="itemCityName">{cityName}<span className='itemSubCat'> - {department}</span></li>
                <li className="itemCategory">Code Postal :<span className='itemSubCat'> {zipCode}</span></li>
                <li className="itemCategory">Population : <span className='itemSubCat'></span></li>
            </ul >

        </>
    )
}

export default City;