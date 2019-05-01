// From Github User @SimonMeskens
// https://github.com/Microsoft/TypeScript/issues/4895#issuecomment-401067935

declare const OpaqueTagSymbol: unique symbol;
declare class OpaqueTag<S extends symbol> {
  private [OpaqueTagSymbol]: S;
}

// Simple alias, if in a module, same as:
// import { Opaque } from "tagmodule";
export type Opaque<T, S extends symbol> = T & OpaqueTag<S>;
