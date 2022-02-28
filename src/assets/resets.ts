import { css } from "@emotion/react";
import mq from "../definitions";


export const resets = css({
    '*': {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
    },
    'html': {
        height: '100%',
    },
    'body': {
        width: '100vw',
        backgroundColor: '#151515',
        color: '#ffffff',
        fontSize: '10px',
        lineHeight: '1.5',
        fontFamily: 'Plain, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
        '&': mq({
            fontSize: ['10px', 'calc(14px + 2*(100vw - 320px)/1600)', '', '', '16px'],
        }),
    },
});

export default resets;