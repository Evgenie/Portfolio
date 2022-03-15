import { TCSSObjProps } from "../../../definitions";
import { moveUp } from "./keyframes";

export const blocks: TCSSObjProps = {
   core: {
      fontSize: '3vw',
      fontFamily: '"Silk Serif", Plain, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      fontStyle: 'italic',
      width: '30vw',
      transform: 'translateY(150%)',
      animation: `${moveUp} 1s ease forwards`,
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;