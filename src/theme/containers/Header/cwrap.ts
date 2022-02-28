import { mq, TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
   core: {
      display: 'flex',
      flexShrink: '0',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      '&': mq({
         padding: ['2rem','2rem', '50px']
      }),
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;