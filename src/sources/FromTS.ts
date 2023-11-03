
export namespace FromTS {

    export const approximatePi = (iterations: number) => {
        console.log('fromTS')
        let piApproximation = 0;
        for (let i = 0; i < iterations; i++) {
            piApproximation += 4 * Math.pow(-1, i) / (2 * i + 1);
        }
        return piApproximation;
    }

}