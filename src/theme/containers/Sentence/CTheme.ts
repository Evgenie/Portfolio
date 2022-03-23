import cwrap from "./cwrap";
import wwrap from "./wwrap";

export type ICTheme = {
    cwrap: typeof cwrap;
    wwrap: typeof wwrap;
}

export const CTheme: ICTheme = {
    cwrap,
    wwrap,
};

export default CTheme;