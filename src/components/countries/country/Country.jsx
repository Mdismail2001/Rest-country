import React from 'react';

const Country = (country) => {
    console.log(country.country.name)

    
    return (
        <div>
            <h1 className='text-amber-200'>Official Name:{country.country.name.official}</h1>
            <h2 className='text-amber-500'>Common Name:  {country.country.name.common}</h2>
            <div >
                <h1 className='text-amber-900'>Native Name</h1>
                {/* <p>Official:{country.country.name.nativeName.official}</p>
                <p>Common:{country.country.name.nativeName.common}</p> */}
            </div>
                <p>Capital:{country.country.capital}</p>
                <p>Region:{country.country.region}</p>
                <img src={country.country.flags.png} alt="alts" />
                <img src={country.country.flags.svg} alt="" />
            
        </div>
    );
};

export default Country;