import menu from "./menu";
import cwrap from "./cwrap";
import headeritems from "./headeritems";
import leftheader from "./leftheader";
import logo from "./logo";
import rightheader from "./rightheader";
import button from "./button";
import termin from "./termin";
import navbar from "./navbar";
import linknav from "./linknav";

export interface ICTheme {
    cwrap: typeof cwrap;
    headeritems: typeof headeritems;
    leftheader: typeof leftheader;
    rightheader: typeof rightheader;
    button: typeof button;
    menu: typeof menu;
    logo: typeof logo;
    termin: typeof termin;
    navbar: typeof navbar;
    linknav: typeof linknav;
}

export const CTheme: ICTheme = {
    cwrap,
    headeritems,
    leftheader,
    rightheader,
    button,
    menu,
    logo,
    termin,
    navbar,
    linknav,
};

export default CTheme;