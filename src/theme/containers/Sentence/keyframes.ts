import { keyframes } from "@emotion/react";

export const moveUp = keyframes({
    '0%': {
        transform: `translateY(150%)`,
    },
    '100%': {
        transform: `translateY(0)`,
    },
});

export const show = keyframes({
    '0%': {
        opacity: '0',
    },
    '100%': {
        opacity: '1',
    }
});

export const lastWord = keyframes({
    '0%': {
        transform: 'translateY(150%)',
        opacity: '0',
    },
    '6.5%': {
        opacity: '0',
        fontStyle: 'normal',
    },
    '13%': {
        opacity: '1',
        fontStyle: 'normal',
    },
    '19.5%': {
        opacity: '0',
        fontStyle: 'normal',
    },
    '25%': {
        transform: `translateY(0)`,
    },
    '26%': {
        transform: `translateY(0)`,
        opacity: '0',
        fontStyle: 'italic'
    },
    '32.5%': {
        transform: `translateY(0)`,
        opacity: '1',
        fontStyle: 'italic'
    },
    '39%': {
        transform: `translateY(0)`,
        opacity: '0',
        fontStyle: 'italic'
    },
    '45.5%': {
        transform: `translateY(0)`,
        opacity: '0',
        fontStyle: 'normal'
    },
    '52%': {
        transform: `translateY(0)`,
        opacity: '1',
        fontStyle: 'normal'
    },
    '58.5%': {
        transform: `translateY(0)`,
        opacity: '0',
        fontStyle: 'normal'
    },
    '65%': {
        transform: `translateY(0)`,
        opacity: '0',
        fontStyle: 'italic'
    },
    '71.5%': {
        transform: `translateY(0)`,
        opacity: '1',
        fontStyle: 'italic'
    },
    '78%': {
        transform: `translateY(0)`,
        opacity: '0',
        fontStyle: 'italic'
    },
    '84.5%': {
        transform: `translateY(0)`,
        opacity: '0',
        fontStyle: 'normal'
    },
    '91%': {
        transform: `translateY(0)`,
        opacity: '1',
        fontStyle: 'normal'
    },
    '100%': {
        transform: `translateY(0)`,
        opacity: '0',
        fontStyle: 'normal'
    },
});

export default {
    moveUp,
    show,
    lastWord,
}