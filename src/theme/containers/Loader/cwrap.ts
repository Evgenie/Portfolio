import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
   core: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center', 
      width: '100vw',
      minHeight: '100vh',
      padding: '0 20vw',
      backgroundColor: '#000',
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;