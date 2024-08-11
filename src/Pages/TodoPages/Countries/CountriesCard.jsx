import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CountriesCard.css'
import { useState } from 'react';

function CountriesCard({country}) {
 if(!country.languages){
  console.log(country.name.common);
  
 }
  return (
    <Card style={{ width: '18rem',height: '20rem'}}>
      <Card.Img variant="top" className='cardimage' src={country.flags.png} />
      <Card.Body>
        <Card.Title>{country.name.common}</Card.Title>
        <Card.Text>
        {country.name.official}
        </Card.Text>
        <Card.Text>
        {country.languages && Object.values(country.languages).map((lang)=>lang)}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CountriesCard;