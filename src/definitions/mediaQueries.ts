import facepaint from 'facepaint';

export const breakpoints: number[] = [320, 1024, 1440, 1920];

export const mq = breakpoints.map(
    (bp: number) => `@media (min-width: ${bp}px)`
);

export const mqfp = facepaint(breakpoints.map(
    (bp: number): string => `@media (min-width: ${bp}px)`
));

export default mq;