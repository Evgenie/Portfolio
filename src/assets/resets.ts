import { css } from "@emotion/react";


export const resets = css`
* {                
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,
body {
    height: 100%;
    font-size: 16px;
    line-height: 1.05;
    font-family: Plain, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
}
`;

export default resets;