import cwrap from './cwrap';
import last from './last';
import wwrap from './wwrap';

export type ICTheme = {
	cwrap: typeof cwrap;
	wwrap: typeof wwrap;
	last: typeof last;
};

export const CTheme: ICTheme = {
	cwrap,
	wwrap,
	last,
};

export default CTheme;
