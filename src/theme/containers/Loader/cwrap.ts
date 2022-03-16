import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
   core: {
      display: 'grid',
      gridTemplateColumns: '1fr 3fr',
      gridTemplateRows: '1fr 1fr 1fr 1fr',
      width: '100vw',
      minHeight: '100vh',
      padding: '15vh 20vw',
      backgroundColor: '#000',
      overflow: 'hidden,'
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;