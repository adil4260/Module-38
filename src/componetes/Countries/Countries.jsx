// rsc
import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({ countriesPromise }) => {

    const [visitedCountry, setvisitedCountry] = useState([]);

    const handelVisitedCountry = (country) => {
        console.log('visited country', country);
        const newVisitedCountry = [...visitedCountry, country];
        setvisitedCountry(newVisitedCountry);
    }

    const countriseData = use(countriesPromise);

    console.log(countriseData);

    return (
        <div>
            <h1>Countries: {countriseData.length} </h1>
            <h3>Total Country Visited:{visitedCountry.length}</h3>

            <div className="countries">
                {
                    countriseData.map(country => <Country key={country.cca3.cca3} country={country}
                        handelVisitedCountry={handelVisitedCountry}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;