import facepaint from 'facepaint';

export const breakpoints = [320, 1024, 1440, 1920];

export const mq: ReturnType<typeof facepaint> = facepaint(
    breakpoints.map(bp => `@media (min-width: ${bp}px)`),
    {
        overlap: true
    }
);

export default mq;