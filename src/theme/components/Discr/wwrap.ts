import { TCSSObjProps } from "../../../definitions";
import { moveUp } from "./keyframes";

export const blocks: TCSSObjProps = {
   core: {
      fontSize: '7vh',
      transform: 'translateY(150%)',
      animation: `${moveUp} 1s ease 4.5s forwards`,
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;