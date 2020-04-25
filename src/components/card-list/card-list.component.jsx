import React from 'react';
import { Card }  from '../card/card.component'
import './card-list.styles.css';

export const CardList = props => (

      <div className="card-list">

          {props.covid_api.map(data => (
            <Card key={data.country} data={ data } />
          ))}

      </div>
    
)