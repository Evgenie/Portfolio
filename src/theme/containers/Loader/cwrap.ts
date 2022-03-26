import { TCSSObjProps } from "../../../definitions";
import { slideUp } from "./keyframes";

export const blocks: TCSSObjProps = {
   core: {
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'center',
      justifyContent: 'flex-start',
      position: 'fixed',
      width: '100vw',
      minHeight: '100vh',
      padding: '0 5vw',
      backgroundColor: '#000',
      zIndex: '1000', 
      animation: `${slideUp} 500ms cubic-bezier(.92,.33,.27,.97) 4500ms forwards`
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;