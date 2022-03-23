import { TCSSObjProps } from "../../../definitions";
import { fontStyle } from "./keyframes";

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
      ':nth-child(-2)': {
         animation: `${fontStyle} 2s linear infinite`
      }
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;