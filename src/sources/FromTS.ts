const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export namespace FromTS {

    export const approximatePi = (iterations: number, tests: number) => {
        console.log('fromTS');
        let retval = 0;
        for (let i = 0; i < tests; i++) {
            let piApproximation = 0;
            for (let i = 0; i < iterations; i++) {
                piApproximation += 4 * Math.pow(-1, i) / (2 * i + 1);
            }
            retval = piApproximation;
        }
        return retval;
    };

    export const fibonacci = (n: number, tests: number) => {
        console.log('fromTS');
        let retval = BigInt(0);
        for (let i = 0; i < tests; i++) {
            const sequence = [BigInt(0), BigInt(1)];
            for (let i = 2; i < n; i++) {
                sequence[i] = BigInt(sequence[i - 1]) + BigInt(sequence[i - 2]);
            }
            retval = sequence[sequence.length - 1];
        }
        return retval;
    };

    export const editDistance = (a: string, b: string, tests: number) => {
        routine.maxDepth = 0;
        console.log('fromTS');
        let retval = 0;
        for (let i = 0; i < tests; i++) {
            const sol: number[][] = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(-1));
            retval = routine(a.length, b.length, a, b, sol);
        }
        console.log(`max depth during exec: ${routine.maxDepth}`);
        return retval;
    };

    export const editDistanceNoString = (strlen: number, tests: number) => {
        routine.maxDepth = 0;
        console.log('fromTS');
        let retval = 0;
        const compstrs: string[] = [];
        for (let i = 0; i < tests; i++) {
            for (let i = 0; i < 2; i++) {
                let rndstr = '';
                for (let i = 0; i < strlen; i++) {
                    const randomIndex = Math.floor(Math.random() * alphabet.length);
                    rndstr = rndstr.concat('', alphabet[randomIndex]);
                }
                compstrs.push(rndstr);
            }
            retval = editDistance(compstrs[0], compstrs[1], 1);
        }
        return retval;
    }

    const routine = (n: number, m: number, a: string, b: string, sol: number[][], depth=0) => {
        if (depth > routine.maxDepth) routine.maxDepth = depth;
        if (n == 0) return m;
        else if (m == 0) return n;
        let d_rm = sol[n-1][m];
        if (d_rm == -1) {
            d_rm = routine(n - 1, m, a, b, sol, depth+1);
            sol[n-1][m] = d_rm;
        }
        d_rm++;
        let d_in = sol[n][m-1];
        if (d_in == -1) {
            d_in = routine(n, m - 1, a, b, sol, depth+1);
            sol[n][m-1] = d_in;
        }
        d_in++;
        let d_sb = sol[n-1][m-1];
        if (d_sb == -1) {
            d_sb = routine(n - 1, m - 1, a, b, sol, depth+1);
            sol[n-1][m-1] = d_sb;
        }
        d_sb += +(a[n - 1] != b[m - 1]);
        //std::cerr << std::endl << "word: " << a << " letter " << n-1 << ": " << a[n-1] << std::endl;
        //std::cerr << "word: " << b << " letter " << m-1 << ": " << b[m-1] << std::endl;
        //std::cerr << "inequal: " << (a[n - 1] != b[m - 1]) << std::endl;
        //std::cerr << "d_rm: " << d_rm << " d_in: " << d_in << " d_sb: " << d_sb << std::endl;
        return Math.min(d_rm, d_in, d_sb);
    }

    routine.maxDepth = 0;

    export const mersiennePrimes = (upTo: number, tests=0) => {
        // Mersienne primes upto number upTo. Return highest prime found.
        let highest = 2;
        for (let i = 0; i < tests; i++) {
            for (let num = 2; num <= upTo; num++) {
                //console.log(`Checking ${num}`)
                if (mersienneCheck(num)) highest = num;
            }
        }
        return highest;
    }

    const mersienneCheck = (num: number) => {
        let n = 2;
        while ((2 ** n) - 1 <= num) {
          if ((2 ** n) - 1 === num) {
            //console.log(`Is mersienne number ${num}`)
            return isPrime(num);
          }
          n++;
        }
        return false;
    }

    const isPrime = (num: number) => {
        for (let i = 2, stop = Math.sqrt(num); i <= stop; i++) {
            if (num % i === 0) {
                //console.log(`not prime ${num}, cause ${num} % ${i}}`);
                return false;
            }
        }
        //console.log(`isPrim ${num}`)
        return num > 1;
    }

    const testFunction = (fname: (...args: any[]) => number, tests: number, ...fargs: any[]) => {
        let retval = 0;
        for (let i = 0; i < tests; i++) {
            retval = fname(...fargs);
        }
        return retval
    }
}