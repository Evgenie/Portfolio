import cwrap from "./cwrap";
import pwrap from "./pwrap";
import wait from "./wait";
import great from "./great";

export type ICTheme = {
    cwrap: typeof cwrap;
    pwrap: typeof pwrap;
    wait: typeof wait;
    great: typeof great;
}

export const CTheme: ICTheme = {
    cwrap,
    pwrap,
    wait,
    great,
};

export default CTheme;