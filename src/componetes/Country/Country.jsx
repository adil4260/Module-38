import React, { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {

    const [visited, setVisited] = useState(false);

    // console.log(country.flags.flags.png);

    const handleVisited = () => {
        // setVisited(true);
        if (visited) {
            setVisited(false);
        }
        else {
            setVisited(true);
        }
        // setVisited(visited ? false : true);

        // setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'country-visited'
            }`}>
            <img src={country.flags.flags.png} alt="" />
            <h1>Country Name: {country.name.common}</h1>
            <p>Population:{country.population.population}</p>
            <p>Area:{country.area.area}{
                country.area.area > 30000 ? "Big country" : "Small Country"}</p>

            <button onClick={handleVisited}>  {visited ? 'visited' : 'Not visited'}</button>
        </div>
    );
};

export default Country;