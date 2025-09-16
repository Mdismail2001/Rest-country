import React from 'react';

const Country = (country) => {
    // console.log(country.country.name.nativeName)
    const nativeValue = country.country.name.nativeName;  // console.log(nativeValue)   


    return (
        <div className='flex gap-10 mt-10'>
            <div className='w-2/12'>
            <h1 className=''>Official Name:{country.country.name.official}</h1>
            <h2 className=''>Common Name:  {country.country.name.common}</h2>
            <h1 className='text-2xl'>Native Name</h1>

            {
            Object.values(nativeValue).map(item =>
            <div>
            <p>Common Name:{item.common}</p>
            <p>Official Name:{item.official}</p>
            </div>
             )}
            <p>Capital:{country.country.capital}</p>
            <p>Region:{country.country.region}</p>
            </div>
            <div className='w-10/12 grid-cols-1 grid md:grid-cols-2 lg:grid-cols-2 border'>
                <img src={country.country.flags.png} alt="alts" />
                <img className='w-[500px] ' src={country.country.flags.svg} alt="" />
            </div>
        </div>
    );
};

export default Country;