import Dropdown from "react-bootstrap/Dropdown";
import Source from '../sources/Source';
import { useState } from 'react';
import React from "react";


const BenchmarkDropdown = ({ 
  calcName,
  returnSource,
  setReturnSource,
}: {
  calcName: string;
  returnSource: { [key: string]: string };
  setReturnSource: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
} ) => {
  // Just typescript things
  const options: Source[] = Object.keys(Source).map((src: string) => Source[src as keyof typeof Source]);

  const [source, setSource] = useState('TypeScript');

  const handleSelect = (eventKey: string | null) => {
    setSource(eventKey as string);
    
    const newReturn = {...returnSource, [calcName]: source}
    setReturnSource(newReturn);
  };

  return (
    <React.Fragment>
      <span className="text-light">Calculation: {calcName}</span>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-calc">
          {source}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {options.map((opt: Source) => { return <Dropdown.Item eventKey={opt} key={opt} >{opt}</Dropdown.Item> })}
        </Dropdown.Menu>
      </Dropdown>
    </React.Fragment>
  )
};

export default BenchmarkDropdown;