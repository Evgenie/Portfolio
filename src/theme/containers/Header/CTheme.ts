import menu from './menu';
import cwrap from './cwrap';
import logo from './logo';
import button from './button';
import termin from './termin';

export interface ICTheme {
	cwrap: typeof cwrap;
	button: typeof button;
	menu: typeof menu;
	logo: typeof logo;
	termin: typeof termin;
}

export const CTheme: ICTheme = {
	cwrap,
	button,
	menu,
	logo,
	termin,
};

export default CTheme;
