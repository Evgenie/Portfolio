import cwrap from './cwrap';
import hwwrap from './hwwrap';
import wwrap from './wwrap';

export type ICTheme = {
	cwrap: typeof cwrap;
	wwrap: typeof wwrap;
	hwwrap: typeof hwwrap;
};

export const CTheme: ICTheme = {
	cwrap,
	wwrap,
	hwwrap,
};

export default CTheme;
