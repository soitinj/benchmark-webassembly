/** Exported memory */
export declare const memory: WebAssembly.Memory;
// Exported runtime interface
export declare function __new(size: number, id: number): number;
export declare function __pin(ptr: number): number;
export declare function __unpin(ptr: number): void;
export declare function __collect(): void;
export declare const __rtti_base: number;
/**
 * assembly/index/approximatePi
 * @param iterations `i32`
 * @param runs `i32`
 * @returns `f64`
 */
export declare function approximatePi(iterations: number, runs: number): number;
/**
 * assembly/index/fibonacci
 * @param n `i32`
 * @param runs `i32`
 * @returns `u64`
 */
export declare function fibonacci(n: number, runs: number): bigint;
/**
 * assembly/index/editDistance
 * @param a `~lib/string/String`
 * @param b `~lib/string/String`
 * @param runs `i32`
 * @returns `i32`
 */
export declare function editDistance(a: string, b: string, runs: number): number;
/**
 * assembly/index/editDistanceNoDataTransfer
 * @param ka `i32`
 * @param runs `i32`
 * @returns `i32`
 */
export declare function editDistanceNoDataTransfer(ka: number, runs: number): number;
/**
 * assembly/index/mersiennePrimes
 * @param upTo `u64`
 * @param tests `i32`
 * @returns `u64`
 */
export declare function mersiennePrimes(upTo: bigint, tests: number): bigint;
