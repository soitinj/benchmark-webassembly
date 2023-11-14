
export namespace FromTS {

    export const approximatePi = (iterations: number) => {
        console.log('fromTS');
        let piApproximation = 0;
        for (let i = 0; i < iterations; i++) {
            piApproximation += 4 * Math.pow(-1, i) / (2 * i + 1);
        }
        return piApproximation;
    };

    export const fibonacci = (n: number) => {
        console.log('fromTS');
        const sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence[i] = sequence[i - 1] + sequence[i - 2];
        }
        return sequence[sequence.length - 1];
    };

    export const editDistance = (a: string, b: string) => {
        console.log('fromTS');
        const sol: number[][] = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(-1));
        return routine(a.length, b.length, a, b, sol);
    }

    const routine = (n: number, m: number, a: string, b: string, sol: number[][]) => {
        if (n == 0) return m;
        else if (m == 0) return n;
        let d_rm = sol[n-1][m];
        if (d_rm == -1) {
            d_rm = routine(n - 1, m, a, b, sol);
            sol[n-1][m] = d_rm;
        }
        d_rm++;
        let d_in = sol[n][m-1];
        if (d_in == -1) {
            d_in = routine(n, m - 1, a, b, sol);
            sol[n][m-1] = d_in;
        }
        d_in++;
        let d_sb = sol[n-1][m-1];
        if (d_sb == -1) {
            d_sb = routine(n - 1, m - 1, a, b, sol);
            sol[n-1][m-1] = d_sb;
        }
        d_sb += +(a[n - 1] != b[m - 1]);
        //std::cerr << std::endl << "word: " << a << " letter " << n-1 << ": " << a[n-1] << std::endl;
        //std::cerr << "word: " << b << " letter " << m-1 << ": " << b[m-1] << std::endl;
        //std::cerr << "inequal: " << (a[n - 1] != b[m - 1]) << std::endl;
        //std::cerr << "d_rm: " << d_rm << " d_in: " << d_in << " d_sb: " << d_sb << std::endl;
        return Math.min(d_rm, d_in, d_sb);
    }
}