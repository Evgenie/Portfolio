import { css } from "@emotion/react";

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
        lineHeight: '1.5',
        fontFamily: 'Plain, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
        fontSize: 'calc(14px + 2*(100vw - 320px)/1600)',
    },
});

export default resets;