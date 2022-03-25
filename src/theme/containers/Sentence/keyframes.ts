import { keyframes } from "@emotion/react";

export const moveUp = keyframes({
    '0%': {
        transform: `translateY(150%)`,
    },
    '25%, 100%': {
        transform: `translateY(0)`,
    },
    '75%': {
        opacity: '1',
    },
    '100%': {
        opacity: '0',
    }
});

export const lastWord = keyframes({
    '25%, 100%': {
        transform: `translateY(0)`,
    },
    '13%, 32.5%, 52%, 71.5%': {
        opacity: '1',
    },
    '19.5%, 26%, 39%, 45.5%, 58.5%, 65%, 100%': {
        opacity: '0',
    },
    '19.5%, 45.5%, 58.5%': {
        fontStyle: 'normal',
        fontFamily: "sans-serif",
    },
    '26%, 39%, 65%, 100%': {
        fontStyle: 'italic',
        fontFamily: "serif",
    },
});

export default {
    moveUp,
    lastWord,
}