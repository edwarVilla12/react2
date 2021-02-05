import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
      <>
        <Row>
          <Col>
            <h1>Enter a city</h1>
          </Col>
        </Row>

        <Row>
          <Col xs={4}>
            <FormControl
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button onClick={() => onSearch(city)}>Weather Forecast</Button>
          </Col>
        </Row>
      </>
    );
  };

export default CitySelector;