import { editDistance as ed, approximatePi as ap, fibonacci as fb} from "./AS/release.js";

export namespace FromAS {

    export const approximatePi = (iterations: number) => {
        console.log('fromAS');
        return ap(iterations);
    };

    export const fibonacci = (n: number) => {
        console.log('fromAS');
        return fb(n);
    };

    export const editDistance = (a: string, b: string) => {
        console.log('fromAS');
        return ed(a, b);
    };
}