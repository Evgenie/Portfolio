import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
   core: {
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'center',
      justifyContent: 'flex-start',
      width: '100vw',
      minHeight: '100vh',
      padding: '0 5vw',
      backgroundColor: '#000',
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;