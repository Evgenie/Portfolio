import cwrap from "./cwrap";
import p1 from "./p1";
import count from "./count";
import p2 from "./p2";

export type ICTheme = {
    cwrap: typeof cwrap;
    p1: typeof p1;
    count: typeof count;
    p2: typeof p2;
}

export const CTheme: ICTheme = {
    cwrap,
    p1,
    p2,
    count,
};

export default CTheme;