import { TCSSObjProps } from "../../../definitions";
import { moveUp } from "./keyframes";

export const blocks: TCSSObjProps = {
   core: {
      gridRow: '2',
      gridColumnStart: '2',
      fontSize: '30px',
      transform: 'translateY(150%)',
      animation: `${moveUp} 1s ease forwards`
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;