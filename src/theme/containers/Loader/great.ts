import { TCSSObjProps } from "../../../definitions";
import { moveUp } from "./keyframes";

export const blocks: TCSSObjProps = {
   core: {
      fontSize: '7vw',
      transform: 'translateY(150%)',
      animation: `${moveUp} 1s ease forwards`,
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;