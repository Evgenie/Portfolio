import cwrap from './cwrap';

export type ICTheme = {
	cwrap: typeof cwrap;
};

export const CTheme: ICTheme = {
	cwrap,
};

export default CTheme;
