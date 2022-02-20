import { css } from "@emotion/react";
import mq from "../definitions";


export const resets = css({
    '*': {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
    },
    'html,body': {
        height: '100%',
        fontSize: '10px',
        lineHeight: '1.5',
        fontFamily: 'Plain, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
        '&': mq({
            fontSize: ['10px', 'calc(14px + 2*(100vw - 320px)/1600)', '', '', '16px'],
        }),
    }
});

export default resets;