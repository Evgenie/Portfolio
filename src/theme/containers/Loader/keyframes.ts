import { keyframes } from "@emotion/react";

export const show = keyframes({
    '0%, 100%': {
        opacity: '0',
    },
    '25%, 75%': {
        opacity: '1',
    },
});

export const slideUp = keyframes({
    '0%': {
        transform: 'translateY(0)',
    },
    '100%': {
        transform: 'translateY(-100%)',
    },
});

export default {
    show,
    slideUp,
}