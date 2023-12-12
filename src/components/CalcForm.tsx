import React, { useState } from "react";
import BenchmarkDropdown from "./BenchmarkDropdown";
import { Col, Form, Row } from "react-bootstrap";
import { FromTS } from "../sources/FromTS";
//import { FromC } from "../sources/FromC";
//import { FromAS } from "../sources/FromAS";


const calcNames = ['approximatePi', 'fibonacci', 'editDistance', 'editDistanceNoString', 'mersiennePrimes']
// for editdistance
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

const calcs = calcNames.reduce((dict, calcName) => {
    dict[calcName] = FromTS[calcName as keyof typeof FromTS];
    return dict
}, {} as Record<string, any>);

const CalcForm = () => {
    const [runtime, setRuntime] = useState(0.0);

    const [iterations, setIterations] = useState(1);

    const [strlen, setStrLen] = useState(2000);

    const [primes, setPrimes] = useState(BigInt(50000));

    const [piResult, setPiResult] = useState(0.0);

    const [fibResult, setFibResult] = useState(BigInt(0));

    const [edResult, setEdResult] = useState(0);

    const [ednsResult, setEdnsResult] = useState(0);

    const [primeResult, setPrimeResult] = useState(0);

    const [isChecked, setIsChecked] = useState(
        calcNames.reduce((ch, cn) => {
            ch[cn] = false;
            return ch;
        }, {} as Record<string, boolean>));

    const runCalcs = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const compstrs: string[] = [];
        console.log(`Random strings of length ${strlen}`);
        for (let i = 0; i < 2; i++) {
            let rndstr = '';
            for (let i = 0; i < strlen; i++) {
                const randomIndex = Math.floor(Math.random() * alphabet.length);
                rndstr += alphabet[randomIndex];
            }
            compstrs.push(rndstr)
        }
        /*Object.keys(returnSource).forEach((calcName) => {
            const source = returnSource[calcName];
            switch(source) {
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
            // Perform calculations using the 'source' value
            console.log(`Calculation ${calcName}: ${source}`);
            //const nm = FromTS.editDistance(compstrs[0], compstrs[1]);
            // Update the runtime state accordingly
            // For example: setRuntime(calculatedRuntime);
        });*/
        let fibb;
        const start = new Date().getTime();
        if (isChecked['approximatePi']) setPiResult(calcs['approximatePi'](iterations, 1));//9999999
        if (isChecked['fibonacci']) setFibResult(calcs['fibonacci'](iterations, 100000));
        if (isChecked['editDistance']) setEdResult(calcs['editDistance'](compstrs[0], compstrs[1], iterations));
        if (isChecked['editDistanceNoString']) setEdnsResult(calcs['editDistanceNoString'](strlen, iterations));
        if (isChecked['mersiennePrimes']) setPrimeResult(calcs['mersiennePrimes'](primes, iterations));
        const time = new Date().getTime() - start;
        console.log(`EditDistance: ${edResult}, approximatePi: ${piResult}, fibonacci: ${fibResult}, highest mprime: ${primeResult}`);
        console.log('RUNTIME:');
        console.log(time);
        setRuntime(time);
    }

    return (
        <React.Fragment>
            <form className='calc-form container justify-content-center' onSubmit={runCalcs} >
                {calcNames.map((cname) => {
                    return <Row key={`${cname}-div`} className="justify-content-center" style={{width: 800}}>
                        <Col xs className="text-light"><div className="justify-content-end">Calculation: {cname}&nbsp;</div></Col>
                        <BenchmarkDropdown key={`${cname}-dropdown`} calcName={cname} calcs={calcs}></BenchmarkDropdown>
                        <Col xs={1}>
                            <Form.Check
                                key={`${cname}-check`}
                                type="checkbox"
                                className="text-light mt-1 mb-1"
                                id={cname}
                                label="Enabled"
                                onChange={() => {
                                    setIsChecked((prevChecked) => ({
                                        ...prevChecked,
                                        [cname]: !prevChecked[cname],
                                      }));
                                }}
                                checked={isChecked[cname]}
                            />
                        </Col>
                    </Row>;
                })}
                <Row>
                    <Form.Label className="text-light">String length for editDistance: &nbsp;</Form.Label>
                    <Form.Control
                        style={{ margin: '0 auto'}}
                        type="number"
                        placeholder={"2000"}
                        name="string length for editDistance"
                        className="w-25 form-control form-rounded mr-1 d-flex align-items-center justify-content-center"
                        onChange={(e) => setStrLen(e.target.value as any as number)}
                        value={strlen}
                        required
                    />
                </Row>
                <Row>
                    <Form.Label className="text-light">Primes until: &nbsp;</Form.Label>
                    <Form.Control
                        style={{ margin: '0 auto'}}
                        type="number"
                        placeholder={"50000"}
                        name="primes until"
                        className="w-25 form-control form-rounded mr-1 d-flex align-items-center justify-content-center"
                        onChange={(e) => setPrimes(e.target.value as any as bigint)}
                        value={primes !== undefined ? primes.toString() : 0}
                        required
                    />
                </Row>
                <Row>
                    <Form.Label className="text-light">Iterations: (fib, pi, ed) &nbsp;</Form.Label>
                    <Form.Control
                        style={{ margin: '0 auto'}}
                        type="number"
                        placeholder={"1"}
                        name="iterations"
                        className="w-25 form-control form-rounded mr-1 d-flex align-items-center justify-content-center"
                        onChange={(e) => setIterations(e.target.value as any as number)}
                        value={iterations}
                        required
                    />
                </Row>
                <button type="submit" name="submitButton" className="btn mt-1 btn-primary w-25">
                    Run calculations
                </button>
            </form>
            <h1 className="text-light">Time: {runtime} ms</h1>
            <h2 className="text-light">Results:</h2>
            <p className="text-light">{`Pi Approximation: ${piResult}`}</p>
            <p className="text-light">{`Fibonacci: ${fibResult}`}</p>
            <p className="text-light">{`Edit distance: ${edResult}`}</p>
            <p className="text-light">{`Edit distance random string: ${ednsResult}`}</p>
            <p className="text-light">{`Highest prime: ${primeResult}`}</p>
        </React.Fragment>    
    )
};

export default CalcForm;