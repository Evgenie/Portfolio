import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
   core: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center', 
      width: '100vw',
      minHeight: '100vh',
      fontSize: '80px',
      backgroundColor: '#000',
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;