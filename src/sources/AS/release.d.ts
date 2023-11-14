/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * assembly/index/approximatePi
 * @param iterations `i32`
 * @returns `f64`
 */
export declare function approximatePi(iterations: number): number;
/**
 * assembly/index/fibonacci
 * @param n `i32`
 * @returns `i32`
 */
export declare function fibonacci(n: number): number;
/**
 * assembly/index/editDistance
 * @param a `~lib/string/String`
 * @param b `~lib/string/String`
 * @returns `i32`
 */
export declare function editDistance(a: string, b: string): number;
