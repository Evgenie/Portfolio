import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
   core: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', 
      width: '100vw',
      minHeight: '100vh',
      cursor: 'none',
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;