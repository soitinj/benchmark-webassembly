import { editDistance as ed, approximatePi as ap, fibonacci as fb, editDistanceNoDataTransfer as edndt, mersiennePrimes as mp} from "./AS/release.js";

export namespace FromAS {

    export const approximatePi = (iterations: number, tests: number) => {
        console.log('fromAS');
        return ap(iterations, tests);
    };

    export const fibonacci = (n: number, tests: number) => {
        console.log('fromAS');
        return fb(n, tests);
    };

    export const editDistance = (a: string, b: string, tests: number) => {
        console.log('fromAS');
        return ed(a, b, tests);
    };

    export const editDistanceNoString = (strlen: number, tests: number) => {
        console.log('fromAS');
        return edndt(strlen, tests);
    };

    export const mersiennePrimes = (upTo: number, tests: number) => {
        console.log('fromAS');
        return mp(upTo, tests);
    };
}