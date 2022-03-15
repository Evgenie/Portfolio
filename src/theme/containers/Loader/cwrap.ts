import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
   core: {
      display: 'grid',
      gridTemplateColumns: '15vw 40vw',
      gridTemplateRows: '90% 10%',
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