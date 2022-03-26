import cwrap from "./cwrap";
import discr from "./discr";

export interface ICTheme {
    cwrap: typeof cwrap;
    discr: typeof discr;
}

export const CTheme: ICTheme = {
    cwrap,
    discr,
};

export default CTheme;