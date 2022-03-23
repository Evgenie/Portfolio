import { TCSSObjProps } from "../../../definitions";
import { show } from "./keyframes";

export const blocks: TCSSObjProps = {
   core: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '3.3vw',
      opacity: '0',
      width: '20vw',
      fontFamily: '"Great Vibes", cursive',
      fontStyle: 'italic',
      animation: `${show} 3s ease forwards`,
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;