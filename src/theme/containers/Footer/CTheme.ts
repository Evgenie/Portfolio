import cwrap from "./cwrap";
import logo from "./logo";
import navbar from "./navbar";
import linknav from "./linknav";

export interface ICTheme {
    cwrap: typeof cwrap;
    logo: typeof logo;
    navbar: typeof navbar;
    linknav: typeof linknav;
}

export const CTheme: ICTheme = {
    cwrap,
    logo,
    navbar,
    linknav,
};

export default CTheme;