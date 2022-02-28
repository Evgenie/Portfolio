import { CSSObject } from '@emotion/react';
import facepaint from 'facepaint';

declare module 'facepaint' {
    export interface DynamicStyle {
        [key: string]: CSSObject;
    }
}

export const breakpoints = [320, 1024, 1440, 1920];

export const mq: ReturnType<typeof facepaint> = facepaint(
    breakpoints.map(bp => `@media (min-width: ${bp}px)`),
    {
        overlap: true
    }
);

export default mq;