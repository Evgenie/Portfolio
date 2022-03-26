import { TCSSObjProps } from "../../../definitions";
import { show } from "./keyframes";

export const blocks: TCSSObjProps = {
   core: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '3.3vw',
      opacity: '0',
      width: '20vw',
      fontFamily: 'serif',
      fontStyle: 'italic',
      animation: `${show} 4.5s ease forwards`,
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;