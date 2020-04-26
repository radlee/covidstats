import React from 'react';
import './card.styles.css';

export const Card = props => (
   
        <div className="card-container">

            <img    alt={ props.data.countryInfo.iso2 } 
                    className="image" 
                    src={`${props.data.countryInfo.flag}`} 
            />

            <h2>{ props.data.country }</h2>

            <h3 className="heading-3">
                <em>Continent -> { props.data.continent }</em>
            </h3>

            <hr/>

            <p>Total Cases : { props.data.cases }</p>
            <p>Today Cases : { props.data.todayCases }</p>

            <br/>

            <p>Total Deaths : { props.data.deaths }</p>
            <p>Today's Deaths : { props.data.todayDeaths }</p>

            <br/>
            
            <p className="recoveries">Recovered : { props.data.recovered }</p>
            
        </div>
    
)