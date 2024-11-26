import type { Linter } from 'eslint';

type ExtractOptionType<T> = T extends Configurator<infer U> ? U : never;

type UnionToIntersection<U> =
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MergeOptionTypes<T extends any[]> = UnionToIntersection<ExtractOptionType<T[number]>>;

export type Configurator<T = void> =
  T extends void
    ? (() => Linter.Config[])
    : ((options: T) => Linter.Config[]);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const define = <T extends Configurator<any>[]>(
  configurators: T,
): (options: MergeOptionTypes<T>) => Linter.Config[] => {
  return (options) => configurators.flatMap((configurator) => {
    if (typeof configurator === 'object') return configurator;
    return configurator(options);
  });
};
