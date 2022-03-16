import { TCSSObjProps } from "../../../definitions";
import { moveUp } from "./keyframes";

export const blocks: TCSSObjProps = {
   core: {
      fontSize: '4vw',
      transform: 'translateY(150%)',
      animation: `${moveUp} 1s ease forwards`,
      marginRight: '1vw',
      ':last-of-type': {
         marginRight:'0',
      },
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;