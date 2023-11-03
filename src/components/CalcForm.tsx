import React, { useState } from "react";
import BenchmarkDropdown from "./BenchmarkDropdown";

const CalcForm = () => {

    const [runtime, setRuntime] = useState(0.0);

    const runCalcs = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const start = performance.now();
        // run calculations here based on form values
        const time = performance.now() - start;
        setRuntime(Math.round(time * 1000));
    }
    
    return (
        <React.Fragment>
            <form className='calc-form' onSubmit={runCalcs} >
                <BenchmarkDropdown calcName='approximate Pi'></BenchmarkDropdown>
                <BenchmarkDropdown calcName='approximate Pi'></BenchmarkDropdown>
                <BenchmarkDropdown calcName='approximate Pi'></BenchmarkDropdown>
                <button type="submit" name="submitButton" className="btn btn-primary w-25">
                    Run calculations
                </button>
            </form>
            <h1 className="text-light">Time: {runtime} ms</h1>
        </React.Fragment>
    )
};

export default CalcForm