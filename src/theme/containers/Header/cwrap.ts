import { mqfp, TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
   core: {
      display: 'flex',
      flexShrink: '0',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      '@media': mqfp({
         padding: [, '2rem 0', '50px 0', , '50px 0'],
      }),
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;