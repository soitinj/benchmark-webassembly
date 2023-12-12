import Dropdown from "react-bootstrap/Dropdown";
import Source from '../sources/Source';
import { useState } from 'react';
import React from "react";
import { FromC } from "../sources/FromC";
import { FromTS } from "../sources/FromTS";
import { FromAS } from "../sources/FromAS";
import { Col } from "react-bootstrap";


const BenchmarkDropdown = ({ 
  calcName,
  calcs,
}: {
  calcName: string;
  calcs: { [key: string]: any };
} ) => {
  // Just typescript things
  const options: Source[] = Object.keys(Source).map((src: string) => Source[src as keyof typeof Source]);

  const [source, setSource] = useState('TypeScript');

  const handleSelect = (eventKey: string | null) => {
    setSource(eventKey as string);
    switch(eventKey) {
      case 'AssemblyScript':
          calcs[calcName] = FromAS[calcName as keyof typeof FromAS];
          break;
      case 'C++':
          calcs[calcName] = FromC[calcName as keyof typeof FromC];
          break;
      case 'TypeScript':
          calcs[calcName] = FromTS[calcName as keyof typeof FromTS];
          break;
      default:
          break;
    }
    console.log(`Calculation ${calcName}: ${eventKey}`);
  };

  return (
    <Col xs={3}>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle className="mt-1 mb-1" variant="success" id="dropdown-calc">
          {source}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {options.map((opt: Source) => { return <Dropdown.Item eventKey={opt} key={opt} >{opt}</Dropdown.Item> })}
        </Dropdown.Menu>
      </Dropdown>
    </Col>
  )
};

export default BenchmarkDropdown;