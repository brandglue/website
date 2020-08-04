import { ThemedStyledComponentsModule } from 'styled-components';

// https://gist.github.com/chrislopresto/490ef5692621177ac71c424543702bbb
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface ThemedStyledComponentsModule<T> {
    createGlobalStyle(
      strings: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): React.ComponentClass;
  }

  export function createGlobalStyle(
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): React.ComponentClass;
}
