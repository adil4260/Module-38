// rsc
import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({ countriesPromise }) => {
    const countriseData = use(countriesPromise);


    console.log(countriseData);
    return (
        <div>
            <h1>Countries: {countriseData.length} </h1>
            <div className="countries">
                {
                    countriseData.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;