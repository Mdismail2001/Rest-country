import React, { use } from 'react';
import Country from './country/Country';

const Countries = ({fetchCountries}) => {
    const countries = use(fetchCountries)
    // console.log(countries)
    return (
        <div className=' mt-10 '> 
            <h1 className='text-amber-700  text-center text-3xl'>{countries.length} : Countries Information Here </h1>
            {
                countries.map(country => <Country  country ={country}></Country>)
            }
        </div>
    );
};

export default Countries;