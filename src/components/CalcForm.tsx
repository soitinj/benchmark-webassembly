import React, { useState } from "react";
import BenchmarkDropdown from "./BenchmarkDropdown";
import { FromC } from "../sources/FromC";
import { FromTS } from "../sources/FromTS";
import { FromAS } from "../sources/FromAS";


const calcNames = ['approximatePi', 'fibonacci', 'editDistance']
// for editdistance
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

const CalcForm = () => {
    const defCalcs = calcNames.reduce((obj: { [key: string]: string}, key: string) => {
        obj[key] = 'TypeScript'
        return obj
    }, {});
    const [runtime, setRuntime] = useState(0.0);
    const [returnSource, setReturnSource] = useState<{ [key: string]: string }>(defCalcs);

    const runCalcs = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let ap = FromTS.approximatePi;
        let fb = FromTS.fibonacci;
        let ed = FromTS.editDistance;
        const compstrs: string[] = []
        for (let i = 0; i < 2; i++) {
            let rndstr = '';
            for (let i = 0; i < 2000; i++) {
                const randomIndex = Math.floor(Math.random() * alphabet.length);
                rndstr += alphabet[randomIndex];
            }
            compstrs.push(rndstr)
        }
        Object.keys(returnSource).forEach((calcName) => {
            const source = returnSource[calcName];
            if (source === 'AssemblyScript') {
                switch(calcName) {
                    case 'approximatePi':
                        ap = FromAS.approximatePi;
                        break;
                    case 'fibonacci':
                        fb = FromAS.fibonacci;
                        break;
                    case 'editDistance':
                        ed = FromAS.editDistance;
                        break;
                    default:
                        break;
                }
            }
            // Perform calculations using the 'source' value
            console.log(`Calculation ${calcName}: ${source}`);
            //const nm = FromTS.editDistance(compstrs[0], compstrs[1]);
            // Update the runtime state accordingly
            // For example: setRuntime(calculatedRuntime);
        });
        const start = new Date().getTime();
        const aResult = ap(9999999);
        const fResult = fb(100000);
        const edResult = ed(compstrs[0], compstrs[1]);
        const time = new Date().getTime() - start;
        console.log(`EditDistance: ${edResult}, approximatePi: ${aResult}, fibonacci: ${fResult}`);
        console.log('RUNTIME:');
        console.log(time);
        setRuntime(time);
    }

    return (
        <React.Fragment>
            <form className='calc-form' onSubmit={runCalcs} >
                {calcNames.map((cname) => {
                    return <BenchmarkDropdown key={cname} calcName={cname} returnSource={returnSource} setReturnSource={setReturnSource} ></BenchmarkDropdown>;
                })}
                <button type="submit" name="submitButton" className="btn btn-primary w-25">
                    Run calculations
                </button>
            </form>
            <h1 className="text-light">Time: {runtime} ms</h1>
        </React.Fragment>
    )
};

export default CalcForm