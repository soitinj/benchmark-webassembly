import React from "react";
import BenchmarkDropdown from "./BenchmarkDropdown";

const CalcForm = () => {
    return (
        <React.Fragment>
            <form className='calc-form'>
                <BenchmarkDropdown calcName='approximate Pi'></BenchmarkDropdown>
                <BenchmarkDropdown calcName='approximate Pi'></BenchmarkDropdown>
                <BenchmarkDropdown calcName='approximate Pi'></BenchmarkDropdown>
                <button type="submit" name="submitButton" className="btn btn-primary w-25">
                    Run calculations
                </button>
            </form>
        </React.Fragment>
    )
};

export default CalcForm