import { system } from 'styled-system';

export interface ICustomTextProps {
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
  whiteSpace?:
    | 'normal'
    | 'nowrap'
    | 'pre'
    | 'pre-wrap'
    | 'pre-line'
    | 'break-spaces';
}

const customTextProps = system({
  textTransform: true,
  whiteSpace: true,
});

export { customTextProps };
