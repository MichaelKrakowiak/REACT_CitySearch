import './style.scss';

function City({ cityName, zipCode, department, population }) {

    return (
        <>
            <ul className="city_item">
                <li className="city_name">{cityName}<span className='city_depNumber'> - {department}</span></li>
                <li className="city_zipCode">Code Postal :<span className='city_subCat'> {zipCode}</span></li>
                <li className="city_number">Population : <span className='city_subCat'>{population}</span></li>
            </ul >

        </>
    )
}

export default City;